<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  sockets: {
    connect() {
      console.log("socket connected");
    },
    customEmit(val) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    }
  },
  methods: {
    clickButton(val: string) {
      // this.$socket.client is `socket.io-client` instance
      this.$socket.client.emit("emit_method", val);
    }
  }
});
</script>

<style scoped></style>
