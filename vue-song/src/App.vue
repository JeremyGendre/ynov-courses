<template>
  <Header/>
  <AppContent/>
  <div id="nav">
    <router-link to="/list">Liste</router-link> |
    <router-link to="/new">New</router-link>
  </div>
  <router-view/>
</template>

<script>
  import AppContent from './components/AppContent.vue'
  import Header from "./components/header/Header";
  export default {
    name: 'App',
    components: {
      Header,
      AppContent
    }
  }
</script>
