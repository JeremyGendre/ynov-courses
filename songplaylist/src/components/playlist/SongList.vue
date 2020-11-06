<template>
    <v-card id="list-card" class="mx-auto text-left overflow-y-scroll h-full"
            :max-width="containerStyle !== null ? containerStyle.width : null" :height="containerStyle !== null ? containerStyle.height : null" tile>
        <v-list>
            <v-list-item-group
                    v-model="selectedItem"
                    color="textPrimary"
            >
                <SongItem v-for="(song, index) in songs" :key="index" :class="(listenedSongs.includes(index) && index !== selectedItem ? 'opacity-50' : '')" :title="song.artist" :text="song.title"></SongItem>
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
            containerStyle: Object,
            currentIndex: Number,
            listenedSongs: Array
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