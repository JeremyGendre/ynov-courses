<template>
  <Header/>
  <AppContent/>
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

