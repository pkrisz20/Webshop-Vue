<template>
  <div class="home">
    <Hero />
    <FeaturedCategories />
    <ProductCarousel />

    <!-- <section class="section-name">
      <div class="wrapper">
        <BlockTitle title="Images" subtitle="Here begins the images section" />
        <Carousel :navigation="true" :pagination="true" :responsive="[[540, 1], [768, 2], [1200, 3]]">
          <slide v-for="(product, index) in products" :key="index">
            <picture>
              <img alt="moviepicture" :src="getImage(product)">
            </picture>
          </slide>
        </Carousel>
      </div>
    </section> -->

    <!-- <section class="mytabs">
      <div class="wrapper">

      <BlockTitle title="Tabs" subtitle="Here begins the tabs section" />
        <Tabs class="tabs">
          <Tab v-for="(tabItem, index) in this.tabContent" :key="index" :name="tabItem.title" :selected="tabItem.selected">
            <p>{{ tabItem.text }}</p>
          </Tab>
        </Tabs>
        <ul>
          <li v-for="(item, index) in this.randomFact" :key="index">{{ item }}</li>
        </ul>
      </div>
    </section> -->
  </div>
</template>

<script>
// import ArticlesList from "@/components/articles/ArticlesList.vue";
// import Tabs from "@/components/Tabs.vue";
// import Tab from "@/components/Tab.vue";
import ProductCarousel from "@/components/products/ProductCarousel.vue";
// import BlockTitle from "@/components/BlockTitle.vue";
import Hero from "@/components/Hero.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
// import Carousel from "@/components/Carousel.vue";
// import { Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    // BlockTitle,
    // ArticlesList,
    // Tab,
    // Tabs,
    ProductCarousel,
    // Carousel,
    // Slide,
    FeaturedCategories,
    Hero
  },
  data() {
    return {
      randomFact: [],
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
      ],
      products: [
        "example.jpg",
        "example.jpg",
        "example.jpg",
        "example.jpg",
        "example.jpg",
        "example.jpg",
      ],
    }
  },
  methods: {
    async getFact() {
      await this.$http.get("https://meowfacts.herokuapp.com", {
        params: {
          count: 2,
        }
      })
      .then(response => {
        if (response.status == 200) this.randomFact = response.data.data;
      })
      .catch(err => {
        if (err.response.status >= 500 && err.response.status <= 599) console.log("Something went wrong");
      });
    },
  },
  // mounted() {
  //   this.getFact();
  // }
};
</script>

<style lang="scss">
  @import "@/assets/styles/pages/home.scss";
</style>
