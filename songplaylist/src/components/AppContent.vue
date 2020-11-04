<template>
  <v-container class="h-full">
    <div class="d-flex h-full">
      <div class="ma-auto text-center">
        <v-btn v-if="!listening" x-large color="blue-grey" :elevation="10" class="ma-2 white--text button-rounded" :disabled="loading" :loading="loading" @click="handleStart">
          Let's go
          <v-icon right>
            mdi-play-circle
          </v-icon>
        </v-btn>
        <Player v-else/>
      </div>
    </div>
  </v-container>
</template>

<script>
  import Player from "./player/Player";
  export default {
    name: "AppContent",
    props: {},
    data: () => ({
      loading: false,
      listening: false
    }),
    methods: {
      handleStart(){
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.listening = true;
        }, 1000);
      }
    },
    components: {Player},
    computed: {},
    watch: {},
  };
</script>
