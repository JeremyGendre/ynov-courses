<template>
  <v-container class="h-full">
    <div class="d-flex h-full">
      <div class="ma-auto text-center">
        <v-btn v-if="!started" x-large color="blue-grey" :elevation="10" class="ma-2 white--text button-rounded d-flex" :disabled="loading" :loading="loading" @click="handleStart">
          <div class="my-auto">Start</div>
          <v-icon right>
            mdi-play-circle
          </v-icon>
        </v-btn>
        <Player v-else @next="nextSong" @previous="prevSong" :song="actualSong"/>
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
      actualSong: null
    }),
    created(){
      //fetch data
      this.songs = [
        new Song('../assets/songs/test.mp4', 120, 'Dua Lipa', "Don't Start Now"),
        new Song('../assets/songs/test2.mp4', 130, 'Alan Walker', "The Spectre"),
      ];
      this.actualSong = this.songs[0];
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
        console.log('next');
      },
      prevSong(){
        console.log('prev');
      }
    },
    components: {Player},
    computed: {},
    watch: {},
  };
</script>
