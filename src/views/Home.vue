<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <List />

    <section class="mytabs">
      <div class="wrapper">

      <h1 class="tabs-title">Here is the tabs section title</h1>
        <Tabs class="tabs">
          <Tab v-for="(tabItem, index) in this.tabContent" :key="index" :name="tabItem.title" :selected="tabItem.selected">
            <p>{{ tabItem.text }}</p>
          </Tab>
        </Tabs>
      </div>
    </section>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Tabs from "@/components/Tabs.vue";
import Tab from "@/components/Tab.vue";

export default {
  name: "Home",
  components: {
    List,
    Tab,
    Tabs
  },
  data() {
    return {
      tabContent: [
        {
          title: "Web",
          text: "Szoveg 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, distinctio.",
        },
        {
          title: "Mobile",
          text: "Text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga numquam iure sapiente amet quaerat doloremque dolores voluptate ab,"
        },
        {
          selected: true,
          title: "Responsive",
          text: "Text 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, similique libero? Odit corporis magnam cupiditate iusto, sequi tenetur voluptatibus autem assumenda! Ea quo reiciendis ipsam aliquam consequatur, neque non eius"
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;

  .mytabs {
    .tabs-title {
      text-align: center;
      margin-bottom: 20px;
    }

    .tabs {
      @include flexBox();
      flex-direction: column;

      &_header {
        width: 100%;

        &__list {
          @include flexBox();
          background-color: $c-d;
          width: 100%;

          &-item {
            margin: 0 20px;
            cursor: pointer;
            font-weight: 700;
            font-size: 20px;
            color: $c-3;
            padding: 20px 30px;
            transition: .2s ease-in-out;
            position: relative;

            &::after {
              position: absolute;
              content: "";
              left: 50%;
              transform: translateX(-50%);
              bottom: -20px;
              width: 0; 
              height: 0; 
              border-left: 20px solid transparent;
              border-right: 20px solid transparent;
              border-top: 20px solid $c-theme;
              opacity: 0;
              transition: all .2s ease-in-out;
            }

            &:hover::after, &.is-active::after {
              opacity: 1;
            }

            &:hover, &.is-active {
              background-color: $c-theme;
              color: $c-white;
            }
          }
        }
      }
    }
  }
}
</style>
