<template>
    <div class="mb-4">
        <div class="text-2xl my-2">Liste des musiques</div>
        <input type="search" v-model="search">
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Créé le</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b-1 border-gray-400" v-for="(song, index) in songs" :key="index">
                    <td class="px-4 py-2">{{ song.name }}</td>
                    <td class="px-4 py-2">{{ displayDate(song.createdAt) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {displayDate} from "../utils/date";
    export default {
        name: 'ListSong',
        props: {
            songs: Array
        },
        data(){
            return {
                search : ''
            };
        },
        methods: {
            displayDate(date){
               return displayDate(date);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
