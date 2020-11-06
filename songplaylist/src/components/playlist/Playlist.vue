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
        <v-snackbar
                v-model="snackbar"
                timeout="2000"
                color="button-rounded"
        >
            {{ snackbarText }}
            <template v-slot:action="{ attrs }">
                <v-btn
                        color="textPrimary"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Ok
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    import Player from "../player/Player";
    import { songList } from "../../data/song";
    import Songlist from "./SongList";
    import {getRandomInt} from "../../helpers/functions";
    export default {
        name: 'Playlist',
        components: {Songlist, Player},
        data: () => ({
            songs: [],
            listenedSongIndexes: [],
            actualSongIndex: null,
            containerStyle: null,
            randomPlaylist: false,
            snackbarText: '',
            snackbar: false
        }),
        created(){
            //fetch data
            this.songs = songList;
            this.actualSongIndex = 0;
        },
        methods: {
            nextSong(ended = false){
                if(this.randomPlaylist && ended){
                    const self = this;
                    const nonListenedSongIndexes = [];
                    this.songs.forEach((song, index) => {
                        if(!self.listenedSongIndexes.includes(index)){ nonListenedSongIndexes.push(index); }
                    });
                    this.actualSongIndex = nonListenedSongIndexes[getRandomInt(0, nonListenedSongIndexes.length)];
                } else if(this.actualSongIndex < this.songs.length - 1){
                    this.actualSongIndex++;
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
                this.showSnackbar("Random track " + (this.randomPlaylist ? 'turned on' : 'turned off'));
            },
            toggleLoop(isLooped){
                this.showSnackbar((isLooped ? 'Current track is being looped' : 'Track loop turned off'));
            },
            showSnackbar(value){
                this.snackbar = true;
                this.snackbarText = value;
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
                if(this.listenedSongIndexes[newIndex] === undefined){
                    this.listenedSongIndexes.push(newIndex);
                }
            }
        },
    };
</script>