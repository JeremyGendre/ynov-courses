<template>
    <v-card id="list-card" class="mx-auto text-left overflow-y-scroll h-full"
            max-width="400" :height="containerHeight" tile>
        <v-list>
            <v-list-item-group
                    v-model="selectedItem"
                    color="orange darker-3"
            >
                <SongItem v-for="(song, index) in songs" :key="index" :title="song.artist" :text="song.title"></SongItem>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    import SongItem from "./SongItem";
    import '../../assets/css/SongList.css';
    export default {
        name: 'Songlist',
        components: {SongItem},
        props:{
            songs: Array,
            containerHeight: Number,
            currentIndex: Number
        },
        data: () => ({
            selectedItem: 0,
        }),
        watch:{
            selectedItem(newIndex){
                this.$emit('changeSong', newIndex);
            },
            currentIndex(newIndex){
                this.selectedItem = newIndex;
            }
        }
    };
</script>