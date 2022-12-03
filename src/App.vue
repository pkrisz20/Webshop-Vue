<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/layout/Layout.vue';

export default {
  name: "App",
  components: { Layout },
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

.disable-interactions {
  pointer-events: none;
}

.warning-to-wait {
  @include absoluteCenter();
  z-index: 99;
  text-align: center;
  background-color: $c-warning;
  color: $c-white;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
  border-radius: 3px;
  box-shadow: $base-box-shadow;
}
</style>