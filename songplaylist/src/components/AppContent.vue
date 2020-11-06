<template>
  <v-container class="my-auto">
    <div class="d-flex h-full">
      <div class="ma-auto text-center">
        <router-view></router-view>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "AppContent",
  };
</script>
