<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <List />
  </div>
</template>

<script>
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    List
  }
};
</script>

<style lang="scss">
.home {
  padding-top: 80px;
}
</style>
