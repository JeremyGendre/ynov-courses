<template>
    <div class="header-link relative mx-5 cursor-pointer px-2 py-1">{{ text }}</div>
</template>

<script>
    export default {
        name: 'HeaderLink',
        props: {
            text: String
        }
    };
</script>