<template>
    <div>
        <v-card class="mx-auto my-card" max-width="344" elevation="20">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

            <v-card-text class="card-text">
                <div class="d-flex justify-space-between">
                    <v-btn class="mx-2 my-auto" fab dark color="light-blue darken-3" @click="toggle">
                        <v-icon dark>
                            {{ playing ? 'mdi-pause' : 'mdi-play' }}
                        </v-icon>
                    </v-btn>
                    <div class="text-left my-auto">
                        <div class="font-bold text-xl">{{ song.artist }}</div>
                        <div class="text-lg">{{ song.title }}</div>
                    </div>
                    <div class="d-flex flex-col my-auto">
                        <v-btn class="mx-2 my-1" fab dark x-small :disabled="!isPrevPossible" color="light-blue darken-3" @click="previous">
                            <v-icon dark>
                                mdi-skip-previous
                            </v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab dark x-small :disabled="!isNextPossible" color="light-blue darken-3" @click="next">
                            <v-icon dark>
                                mdi-skip-next
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="mt-2">
                    <v-slider
                            v-model="audioTimer"
                            min="0" :max="audioDuration"
                            color="orange darken-3"
                            :label="readableDuration"
                    ></v-slider>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import '../../assets/css/Player.css';
    export default {
        name: 'Player',
        props: {
            song: Object,
            isNextPossible: Boolean,
            isPrevPossible: Boolean
        },
        data : () => ({
            playing: false,
            audioSong : null,
            audioDuration: 0,
            audioTimer: 0,
        }),
        created(){
            this.audioSong = new Audio(this.song.src);
            this.getDuration();
            this.updateTimer();
        },
        methods: {
            play(){
                this.playing = true;
            },
            pause(){
                this.playing = false;
            },
            toggle(){
                if(this.playing){
                    this.pause();
                }else{
                    this.play();
                }
            },
            next(){
                this.audioSong.pause();
                this.$emit('next');
            },
            previous(){
                this.audioSong.pause();
                this.$emit('previous');
            },
            getDuration(){
                const self = this;
                this.audioSong.addEventListener("loadedmetadata", function(e){
                    self.audioDuration = Math.ceil(e.currentTarget.duration);
                });
            },
            updateTimer(){
                const self = this;
                this.audioSong.addEventListener("timeupdate", function() {
                    self.audioTimer = Math.ceil(self.audioSong.currentTime);
                }, false);
            },
        },
        computed: {
            readableDuration(){
                const time = this.audioDuration - this.audioTimer;
                const minutes = Math.floor( time / 60);
                const seconds = time - (minutes * 60);
                return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
            }
        },
        watch:{
            song(newVal){
                this.audioSong = new Audio(newVal.src);
                this.getDuration();
                this.updateTimer();
                if(this.playing){
                    this.audioSong.play();
                }
                this.audioTimer = 0;
            },
            playing(isPlaying){
                if(isPlaying){
                    this.audioSong.play();
                }else{
                    this.audioSong.pause();
                }
            },
            audioTimer(newTime, oldTime){
                if(Math.abs(newTime - oldTime) > 1){
                    this.audioSong.currentTime = newTime;
                }
            }
        }
    }
</script>