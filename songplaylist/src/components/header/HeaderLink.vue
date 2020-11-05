<template>
    <div class="header-link d-flex relative mx-5 cursor-pointer pr-2 py-3" @click="handleLinkClick">
        <v-icon class="my-auto mr-2">mdi-{{ icon }}</v-icon>
        <div class="my-auto">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLink',
        props: {
            text: String,
            icon: String,
            href: String
        },
        methods: {
            handleLinkClick(){
                this.$router.push(this.href);
            }
        }
    };
</script>