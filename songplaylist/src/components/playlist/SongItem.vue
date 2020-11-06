<template>
    <v-list-item two-line>
        <v-list-item-content>
            <v-list-item-title v-text="title"/>
            <v-list-item-subtitle v-text="artist"/>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: 'SongItem',
        props: {
            artist: String,
            title: String
        }
    };
</script>