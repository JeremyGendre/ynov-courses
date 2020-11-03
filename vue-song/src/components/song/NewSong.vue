<template>
    <form @submit="addNewSong">
        <div class="text-sm font-bold mb-1">Nouvelle musique</div>
        <input type="text" class="outline-none rounded px-2 py-1 border border-gray-400 focus:border-blue-500" required placeholder="Nouvelle musique" v-model="song"/>
        <div>
            <button>Ajouter</button>
        </div>
        <div>{{song}}</div>
    </form>
</template>

<script>
    export default {
        name: 'NewSong',
        props: {
            addSong: Function
        },
        data: () => {
            return {
                song : ''
            };
        },
        methods:{
            addNewSong(e){
                e.preventDefault();
                if(this.song !== ''){
                    this.addSong(e, this.song);
                    this.song = '';
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
