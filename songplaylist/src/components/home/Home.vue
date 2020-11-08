<template>
    <v-btn x-large color="primary" :elevation="10" class="ma-2 white--text rounded d-flex"
           :disabled="loading" :loading="loading" @click="handleStart">
        <div class="my-auto">Start</div>
        <v-icon right class="text-lg">
            mdi-play-circle
        </v-icon>
    </v-btn>
</template>

<script>
    import {updateBackground} from "../../helpers/functions";

    export default {
        name: 'Home',
        data : ()=>({
            loading: false,
        }),
        created(){
            updateBackground(null);
        },
        methods:{
            handleStart(){
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push('/playlist');
                }, 1000);
            }
        }
    };
</script>