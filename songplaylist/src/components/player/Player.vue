<template>
    <div>
        <v-card class="mx-auto my-card" max-width="344" elevation="20">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

            <v-card-text class="card-text">
                <div class="d-flex justify-space-between">
                    <v-btn class="mx-2 my-auto" fab dark color="purple" @click="toggle">
                        <v-icon dark>
                            {{ playing ? 'mdi-pause' : 'mdi-play' }}
                        </v-icon>
                    </v-btn>
                    <div class="text-left my-auto">
                        <div class="font-bold text-xl">Artiste</div>
                        <div class="text-lg">Titre de la chançon</div>
                    </div>
                    <div class="d-flex flex-col my-auto">
                        <v-btn class="mx-2 my-1" fab dark x-small color="purple" @click="previous">
                            <v-icon dark>
                                mdi-skip-previous
                            </v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab dark x-small color="purple" @click="next">
                            <v-icon dark>
                                mdi-skip-next
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div>
                    <input type="range" class="w-full" min="0" max="100" v-model="musicTimer" />
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
            song: Object
        },
        data : () => ({
            musicTimer: 0,
            playing: false
        }),
        methods: {
            play(){
                if(this.song){
                    this.playing = true;
                    const timeInterval = setInterval(() => {
                        if(this.musicTimer > this.song.duration || this.playing === false){
                            clearInterval(timeInterval);
                            return;
                        }
                        this.musicTimer++;
                    }, 1000)
                }
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
                this.$emit('next');
            },
            previous(){
                this.$emit('previous');
            }
        }
    }
</script>