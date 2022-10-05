<template>
  <header class="header">
    <!-- <button class="btn">Button</button> -->
    <div class="wrapper">
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <!-- <input type="text" /> -->
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  padding: 30px 0;
  background-color: $c-theme;

  .btn {
    @include btn($c-theme, $c-white, $c-warning);
  }

  .nav {
    @include flexBox();

    a {
      font-weight: bold;
      color: $c-1;
      margin: 0 15px;

      &.router-link-exact-active {
        color: $c-white;
      }
    }
  }
}
</style>
