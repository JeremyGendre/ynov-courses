<template>
    <div class="mb-4">
        <div>
            <slot name="azy">Un con</slot>
        </div>

        <Todos/>

        <div class="text-2xl my-2">Liste des musiques</div>
        <div class="flex">
            <div class="my-auto">
                <input type="search" class="outline-none rounded px-2 py-1 border border-gray-400 focus:border-blue-500" required placeholder="placeholder" v-model="search"/>
            </div>
            <div class="ml-8 my-auto">
                <div>Affichage :</div>
                <input type="range" :disabled="this.search !== ''" v-model="nbSongs" min="0" :max="songs.length"/>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Créé le</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b-1 border-gray-400 hover:bg-gray-200" v-for="(song, index) in displayedSongs" :key="index">
                    <td class="px-4 py-2">{{ song.name }}</td>
                    <td class="px-4 py-2">{{ displayDate(song.createdAt) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {displayDate} from "../utils/date";
    import Todos from "../todos/Todos";
    export default {
        name: 'ListSong',
        components: {Todos},
        props: {
            songs: Array
        },
        data(){
            return {
                search : '',
                displayedSongs: this.songs,
                nbSongs: this.songs.length
            };
        },
        methods: {
            displayDate(date){
               return displayDate(date);
            },
            displaySongList(value = null){
                if(value !== null){
                    return this.songs.filter(song => song.name.includes(value));
                }
                return this.songs.slice(0, this.nbSongs);
            }
        },
        watch: {
            search(newVal){
                this.nbSongs = this.songs.length;
                if(newVal !== ''){
                    console.log(this.displaySongList(newVal));
                    this.displayedSongs = this.displaySongList(newVal);
                }else{
                    this.displayedSongs = this.songs;
                }
            },
            nbSongs(){
                this.displayedSongs = this.displaySongList();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
