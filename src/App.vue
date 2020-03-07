<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Placeholder App.vue / AppBar</div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>
