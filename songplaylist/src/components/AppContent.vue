<template>
  <v-container class="h-full">
    <div class="d-flex h-full">
      <div class="ma-auto text-center">
        <v-btn v-if="!started" x-large color="orange darken-3" :elevation="10" class="ma-2 white--text button-rounded d-flex" :disabled="loading" :loading="loading" @click="handleStart">
          <div class="my-auto">Start</div>
          <v-icon right>
            mdi-play-circle
          </v-icon>
        </v-btn>
        <Player v-else
                @next="nextSong"
                @previous="prevSong"
                @updateBackground="updateBackground"
                :song="songs[actualSongIndex]"
                :isPrevPossible="isPrevPossible"
                :isNextPossible="isNextPossible"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
  import Player from "./player/Player";
  import {Song} from "../data/song";

  export default {
    name: "AppContent",
    props: {},
    data: () => ({
      loading: false,
      started: false,
      songs: [],
      actualSongIndex: null
    }),
    created(){
      //fetch data
      this.songs = [
        new Song('/songs/Alan Walker - Faded.mp3', "Faded",'Alan Walker'),
        new Song('/songs/Alan Walker - The Spectre.mp3', "The Spectre",'Alan Walker'),
        new Song('/songs/roby-fayer-ready-to-fight-fttom-gefen.mp3', 'Ready to fight', 'Roby Fayer'),
        new Song('/songs/wolves-my-time.mp3', "My time", "Wolves"),
      ];
      this.actualSongIndex = 0;
    },
    methods: {
      handleStart(){
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.started = true;
        }, 1000);
      },
      nextSong(){
          if(this.actualSongIndex < this.songs.length - 1){
              this.actualSongIndex++;
          }
      },
      prevSong(){
          if(this.actualSongIndex > 0){
              this.actualSongIndex--;
          }
      },
      updateBackground(url){
        this.$emit('updateBackground', url);
      }
    },
    components: {Player},
    computed: {
        isPrevPossible(){
            return this.actualSongIndex > 0;
        },
        isNextPossible(){
            return this.actualSongIndex < this.songs.length - 1;
        },
    },
    watch: {},
  };
</script>
