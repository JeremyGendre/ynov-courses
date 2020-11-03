<template>
  <div class="container mx-auto">
    <ListSong :songs="mySongs"/>
    <NewSong :addSong="addSong"/>
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
        this.mySongs.push(createNewSong(song));
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
