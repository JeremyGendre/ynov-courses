<template>
    <div id="header" class="fixed w-full d-flex justify-center">
        <HeaderLink text="Home" icon="home" href="/"/>
        <HeaderLink text="Playlist" icon="playlist-music" href="/playlist"/>
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