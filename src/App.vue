<template>
  <div id="app" :class="[{ 'disable-interactions' : this.$store.state.haveToWait }]">
    <Header />
    <router-view style="padding-top: 70px" />
    <div v-if="this.$store.state.haveToWait" class="warning-to-wait">You have to wait a few seconds before you make any interactions again!</div>
    <!-- <button @click="addNotification()">ADD NOTIFICATION</button>
    <button @click="addNotification1()">ADD NOTIFICATION</button>
    <button @click="addNotification2()">ADD NOTIFICATION</button>
    <button @click="addNotification3()">ADD NOTIFICATION</button> -->
    <NotificationsList />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NotificationsList from "@/components/NotificationsList.vue";

export default {
  name: "App",
  components: {
    Header,
    NotificationsList
  },
  // methods: {
  //   addNotification() {
  //     this.$store.dispatch("addNotification", { type: "success", message: "Success message" });
  //   },
  //   addNotification1() {
  //     this.$store.dispatch("addNotification", { type: "error", message: "An error is occured An error is occured An error is occured An error is occured An error is occured" });
  //   },
  //   addNotification2() {
  //     this.$store.dispatch("addNotification", { type: "warning", message: "A warning message" });
  //   },
  //   addNotification3() {
  //     this.$store.dispatch("addNotification", { message: "A info message" });
  //   },
  // },
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