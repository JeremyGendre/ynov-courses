<template>
  <v-app>
    <!--<v-app-bar app color="transparent" class="fixed" elevation="10" dark></v-app-bar>-->
    <v-main>
      <div id="background" class="w-full h-full fixed"></div>
      <Header/>
      <AppContent/>
    </v-main>
  </v-app>
</template>

<script>
import AppContent from './components/AppContent';
import Header from "./components/header/Header";
import './assets/css/App.css';
import './assets/css/Responsive.css';

export default {
  name: 'App',
  components: {
    Header,
    AppContent,
  },
};
</script>
