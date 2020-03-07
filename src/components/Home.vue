<template>
  <div>
    <GetUserInformation :formType="'start'" />
    <GetUserInformation :formType="'join'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetUserInformation from "@/components/GetUserInformation.vue";

export default Vue.extend({
  components: {
    GetUserInformation
  }
});
</script>

<style scoped></style>
