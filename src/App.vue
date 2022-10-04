<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: $main-font;
}

html:focus-within {
  scroll-behavior: smooth;
}
</style>