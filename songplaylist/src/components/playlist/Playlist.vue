<template>
    <div class="d-flex relative">
        <div class="h-full">
            <Player
                    @updateHeight="updateContainerHeight"
                    @next="nextSong"
                    @previous="prevSong"
                    :song="songs[actualSongIndex]"
                    :isPrevPossible="isPrevPossible"
                    :isNextPossible="isNextPossible"
            />
        </div>
        <div class="h-full relative">
            <Songlist @changeSong="handleSongChange" :containerHeight="containerHeight" :songs="songs"/>
        </div>
    </div>
</template>

<script>
    import Player from "../player/Player";
    import { songList } from "../../data/song";
    import Songlist from "./SongList";
    export default {
        name: 'Playlist',
        components: {Songlist, Player},
        data: () => ({
            songs: [],
            listenedSongIndexes: [],
            actualSongIndex: null,
            containerHeight: null
        }),
        created(){
            //fetch data
            this.songs = songList;
            this.actualSongIndex = 0;
        },
        methods: {
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
            updateContainerHeight(value){
                this.containerHeight = value;
            },
            handleSongChange(index){
                if(this.songs[index] !== undefined){
                    this.actualSongIndex = index;
                }
            }
        },
        computed: {
            isPrevPossible(){
                return this.actualSongIndex > 0;
            },
            isNextPossible(){
                return this.actualSongIndex < this.songs.length - 1;
            },
        },
        watch: {
            actualSongIndex(newIndex){
                if(this.listenedSongIndexes[newIndex] === undefined){
                    this.listenedSongIndexes.push(newIndex);
                }
            }
        },
    };
</script>