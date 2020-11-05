<template>
    <div id="header" class="fixed w-full d-flex justify-center py-3">
        <HeaderLink text="Home" />
        <HeaderLink text="Playlist" />
    </div>
</template>

<script>
    import '../../assets/css/Header.css';
    import HeaderLink from "./HeaderLink";
    export default {
        name: 'Header',
        components: {HeaderLink}
    }
</script>