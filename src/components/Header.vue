<template>
  <header class="header" :class="{ sticky: scrollPosition > 0 }">
    <div class="wrapper">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: 0,
    }
  },
  methods: {
    updateScroll() {
        this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
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
  height: 70px;
  background-color: $c-theme;
  transition: .3s ease-in-out;

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

.sticky {
  background: $c-skyblue;
  height: 60px;
}
</style>
