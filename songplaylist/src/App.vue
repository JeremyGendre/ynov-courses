<template>
  <v-app>
      <!--
    <v-app-bar app color="light-blue darken-3" elevation="10" dark>
      <Header/>
    </v-app-bar>
    -->

    <v-main>
      <AppContent/>
    </v-main>
  </v-app>
</template>

<script>
import AppContent from './components/AppContent';
import './assets/css/App.css';

export default {
  name: 'App',

  components: {
      AppContent,
  },

  data: () => ({}),
};
</script>
