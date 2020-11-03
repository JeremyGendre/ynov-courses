<template>
    <form @submit="addNewSong">
        <div class="text-sm font-bold mb-1">Nouvelle musique</div>
        <input type="text" class="outline-none rounded px-2 py-1 border border-gray-400 focus:border-blue-500" required placeholder="Nouvelle musique" v-model="song"/>
        <div v-if="error.length" class="text-red-500">
            {{ error }}
        </div>
        <div class="mt-2">
            <button class="focus:outline-none px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-400 transition duration-150">Ajouter</button>
        </div>
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
                song : '',
                error: ''
            };
        },
        methods:{
            addNewSong(e){
                e.preventDefault();
                this.error = '';
                if(this.song !== ''){
                    if(this.addSong(e, this.song)){
                        this.song = '';
                    }else{
                        this.error = 'La musique existe déjà';
                    }
                }
            }
        },
        watch:{
            song(val) {
                if(val === ''){
                    this.error = '';
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
