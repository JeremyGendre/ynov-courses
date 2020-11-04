<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-1" elevation="10" dark>
      <Header/>
    </v-app-bar>

    <v-main>
      <AppContent/>
    </v-main>
  </v-app>
</template>

<script>
import AppContent from './components/AppContent';
import Header from "./components/header/Header";
import './assets/css/App.css';

export default {
  name: 'App',

  components: {
      Header,
      AppContent,
  },

  data: () => ({}),
};
</script>
