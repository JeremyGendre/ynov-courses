<template>
  <v-app>
    <!--<v-app-bar app color="transparent" class="fixed" elevation="10" dark></v-app-bar>-->
    <v-main>
      <div id="background" class="w-full h-full fixed" :style="(`background-image: url('${backgroundImage}')`)"></div>
      <Header/>
      <AppContent @updateBackground="updateBackground"/>
    </v-main>
  </v-app>
</template>

<script>
import AppContent from './components/AppContent';
import './assets/css/App.css';
import Header from "./components/header/Header";

export default {
  name: 'App',
  components: {
    Header,
    AppContent,
  },
  data: ()=> ({
    backgroundImage: ''
  }),
  methods: {
    updateBackground(url){
      this.backgroundImage = url;
    }
  }
};
</script>
