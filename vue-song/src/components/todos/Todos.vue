<template>
    <div>
        <div v-if="fetchedData.length">
            <div v-for="(item, index) in displayedData" :key="index">{{ item.title }}</div>
        </div>
        <div v-else>Chargement...</div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Todos",
        data(){
            return {
                fetchedData: []
            };
        },
        created(){
            this.fetchData();
        },
        computed: {
            displayedData(){
                return this.fetchedData.filter((data, index) => index < 10);
            }
        },
        methods:{
            fetchData(){
                axios.get('https://jsonplaceholder.typicode.com/todos/').then(result => {
                    this.fetchedData = result.data;
                });
            },
        }
    }
</script>