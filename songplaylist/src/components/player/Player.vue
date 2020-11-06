<template>
    <div>
        <v-card id="player-card" ref="playerCard" class="mx-auto" max-width="344" elevation="20">
            <v-img v-if="audioImage === null" src="/images/default_song.png" height="200px"></v-img>
            <v-img v-else :src="audioImage" height="200px"></v-img><!-- https://cdn.vuetifyjs.com/images/cards/sunshine.jpg -->

            <v-card-text class="card-text">

                <!-- TIMER -->
                <div class="mt-2 mb-1">
                    <v-slider
                            hide-details
                            v-model="audioTimer"
                            min="0" :max="audioDuration"
                            color="orange darken-3"
                            :label="readableDuration"
                    ></v-slider>
                </div>

                <!-- SONG INFORMATIONS -->
                <div class="flex w-full">
                    <div class="text-center my-auto">
                        <div class="font-bold text-xl">{{ song.artist }}</div>
                        <div class="text-lg mt-1">{{ song.title }}</div>
                    </div>
                </div>

                <!-- ACTIONS -->
                <div class="d-flex justify-center mt-4">
                    <v-btn class="mx-2 my-auto" fab dark x-small :color="(audioLoop ? 'orange darken-3' : '' )" @click="toggleRepeat">
                        <v-icon dark>
                            mdi-repeat
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2 my-auto" fab dark x-small :disabled="!isPrevPossible" @click="previous">
                        <v-icon dark>
                            mdi-skip-previous
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2 my-auto" fab dark color="orange darken-3" @click="toggle">
                        <v-icon dark>
                            {{ playing ? 'mdi-pause' : 'mdi-play' }}
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2 my-auto" fab dark x-small :disabled="!isNextPossible" @click="next">
                        <v-icon dark>
                            mdi-skip-next
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2 my-auto" fab dark x-small :disabled="audioLoop" :color="(randomPlaylist ? 'orange darken-3' : '' )" @click="toggleRandom">
                        <v-icon dark>
                            mdi-shuffle-variant
                        </v-icon>
                    </v-btn>
                </div>

                <!-- VOLUME -->
                <div class="text-center w-full flex">
                    <v-slider
                            hide-details
                            v-model="audioVolume"
                            min="0" max="1" step="0.01"
                            class="volume-slider mx-auto"
                            prepend-icon="mdi-volume-high"
                    ></v-slider>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import '../../assets/css/Player.css';
    import axios from 'axios';
    import {getStoredItem, storeItem} from "../../helpers/storage";
    import {updateBackground} from "../../helpers/functions";

    export default {
        name: 'Player',
        props: {
            song: Object,
            isNextPossible: Boolean,
            isPrevPossible: Boolean,
            randomPlaylist: Boolean
        },
        data : () => ({
            playing: false,
            audioSong : null,
            audioDuration: 0,
            audioTimer: 0,
            audioLoop: false,
            audioVolume : getStoredItem('volume') ?? 1,
            audioImage: null,
            loadingImage: true
        }),
        created(){
            this.audioSong = new Audio(this.song.src);
            this.setUpSong();
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
                const audioEnded = this.audioSong.ended;
                this.audioSong.pause();
                this.$emit('next', audioEnded);
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
            handleEnd(){
                const self = this;
                this.audioSong.addEventListener("ended", function() {
                    self.next();
                }, false);
            },
            getImage(){
                this.audioImage = null;
                axios.get('https://picsum.photos/600/300.jpg', {responseType: "arraybuffer"}).then(result => {
                    const buff = new Buffer(result.data);
                    this.audioImage = `data:image/jpeg;base64,${buff.toString('base64')}`;
                });
            },
            setUpSong(){
                //TODO : do this stuff before (when the song is given to this component, to not have to do all of this setup methods)
                this.getDuration();
                this.updateTimer();
                this.getImage();
                this.handleEnd();
                this.setUpVolume();
            },
            setUpVolume(){
                this.audioSong.volume = getStoredItem('volume') ?? 1;
            },
            toggleRepeat(){
                this.audioLoop = !this.audioLoop;
                this.$emit('toggleLoop', this.audioLoop);
            },
            toggleRandom(){
                this.$emit('toggleRandom');
            }
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
                this.audioSong.pause();
                this.audioSong = new Audio(newVal.src);
                this.setUpSong();
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
            },
            audioImage(newImageUrl){
                updateBackground(newImageUrl);
            },
            audioVolume(newVolume){
                storeItem('volume', newVolume);
                this.audioSong.volume = newVolume;
            },
            audioLoop(newLoopValue){
                this.audioSong.loop = newLoopValue;
            }
        },
        updated() {
            this.$emit('updateHeight', this.$refs.playerCard.$el.offsetHeight);
        },
        beforeDestroy() {
            this.audioSong.pause();
        }
    }
</script>