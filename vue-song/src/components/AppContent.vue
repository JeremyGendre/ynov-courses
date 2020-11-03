<template>
  <div class="container mx-auto">
    <ListSong :songs="mySongs">
      <template v-slot:azy>Un débile</template>
    </ListSong>
    <NewSong :addSong="addSong"></NewSong>
  </div>
</template>

<script>
  import ListSong from "./song/ListSong";
  import NewSong from "./song/NewSong";
  import {createNewSong} from "./utils/SongHelper";
  export default {
    name: 'AppContent',
    components: {
      NewSong,
      ListSong
    },
    data: () => {
      return {
        mySongs : [createNewSong('azy ouais'), createNewSong('ouais re'), createNewSong('tg')]
      };
    },
    methods: {
      addSong(e, song) {
        if(this.mySongs.filter(oneSong => oneSong.name === song).length > 0){
          return false;
        }
        this.mySongs.push(createNewSong(song));
        return true;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
