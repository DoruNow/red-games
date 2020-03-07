<template>
  <div>
    <div class="headline text-center">Good Luck and Have Fun</div>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/components/Home.vue";

export default Vue.extend({
  components: {
    Home
  },
  computed: {
    type() {
      return this.$route.path;
    }
  }
});
</script>

<style scoped></style>
