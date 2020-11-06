<template>
    <div id="playlist-container" class="d-flex relative">
        <div class="h-full">
            <Player
                    @updateStyle="updateContainerStyle"
                    @next="nextSong"
                    @previous="prevSong"
                    @toggleRandom="toggleRandom"
                    @toggleLoop="toggleLoop"
                    :song="songs[actualSongIndex]"
                    :isPrevPossible="isPrevPossible"
                    :isNextPossible="isNextPossible"
                    :randomPlaylist="randomPlaylist"
            />
        </div>
        <div class="h-full relative">
            <Songlist
                    @changeSong="handleSongChange"
                    :containerStyle="containerStyle"
                    :songs="songs"
                    :currentIndex="actualSongIndex"
                    :listenedSongs="listenedSongIndexes"
            />
        </div>
        <MySnackbar :options="snackbar"/>
    </div>
</template>

<script>
    import Player from "../player/Player";
    import { songList } from "../../data/song";
    import Songlist from "./SongList";
    import {getRandomInt} from "../../helpers/functions";
    import MySnackbar from "../snackbar/MySnackbar";

    const defaultSnackbar = {
        show: false,
        text: '',
        btnText: 'Ok',
        btnAction: () => {},
        timeout: 2000
    };

    export default {
        name: 'Playlist',
        components: {MySnackbar, Songlist, Player},
        data: () => ({
            songs: [],
            listenedSongIndexes: [],
            actualSongIndex: null,
            containerStyle: null,
            randomPlaylist: false,
            snackbar: defaultSnackbar
        }),
        created(){
            //fetch data
            this.songs = songList;
            this.actualSongIndex = 0;
        },
        methods: {
            nextSong(){
                if(this.randomPlaylist && this.listenedSongIndexes.length < this.songs.length){
                    const self = this;
                    const nonListenedSongIndexes = [];
                    this.songs.forEach((song, index) => {
                        if(!self.listenedSongIndexes.includes(index)){ nonListenedSongIndexes.push(index); }
                    });
                    this.actualSongIndex = nonListenedSongIndexes[getRandomInt(0, nonListenedSongIndexes.length)];
                } else if(this.actualSongIndex < this.songs.length - 1){
                    this.actualSongIndex++;
                }else{
                    this.snackbar = {
                        ...defaultSnackbar,
                        btnText: 'Replay',
                        timeout: -1,
                        show: true,
                        text: 'The playlist is finished.',
                        btnAction: () => {
                            this.listenedSongIndexes = [];
                            this.actualSongIndex = 0;
                            this.snackbar.show = false;
                        }
                    };
                }
            },
            prevSong(){
                if(this.actualSongIndex > 0){
                    this.actualSongIndex--;
                }
            },
            updateContainerStyle(value){
                this.containerStyle = value;
            },
            handleSongChange(index){
                if(this.songs[index] !== undefined){
                    this.actualSongIndex = index;
                }
            },
            toggleRandom(){
                this.randomPlaylist = !this.randomPlaylist;
                this.snackbar = {
                    ...defaultSnackbar,
                    show: true,
                    text: "Random track " + (this.randomPlaylist ? 'turned on' : 'turned off'),
                    btnAction: () => { this.snackbar.show = false }
                };
            },
            toggleLoop(isLooped){
                this.snackbar = {
                    ...defaultSnackbar,
                    show: true,
                    text: (isLooped ? 'Current track is being looped' : 'Track loop turned off'),
                    btnAction: () => { this.snackbar.show = false }
                };
            }
        },
        computed: {
            isPrevPossible(){
                return this.actualSongIndex > 0;
            },
            isNextPossible(){
                return this.actualSongIndex < this.songs.length - 1;
            }
        },
        watch: {
            actualSongIndex(newIndex){
                if(!this.listenedSongIndexes.includes(newIndex)){
                    this.listenedSongIndexes.push(newIndex);
                }
            }
        },
    };
</script>