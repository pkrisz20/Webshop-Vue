<template>
  <div class="home">
    <Hero />
    <FeaturedCategories />
    <ProductCarousel :products="this.products" />

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
import ProductCarousel from "@/components/products/ProductCarousel.vue";
import Hero from "@/components/Hero.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";

export default {
  name: "Home",
  components: {
    ProductCarousel,
    FeaturedCategories,
    Hero,
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
      ],
      products: [
        {
          name: "Product Name",
          image: "example.jpg",
          price: 150,
          isOnDiscount: true,
          discount: 68,
          isAvailable: true,
          isSpecial: false
        },
        {
          name: "Name",
          image: "example.jpg",
          price: 350,
          isOnDiscount: true,
          discount: 160,
          isAvailable: false,
          isSpecial: true
        },
        {
          name: "Eggs",
          image: "example.jpg",
          price: 850,
          isOnDiscount: false,
          discount: null,
          isAvailable: true,
          isSpecial: false
        },
        {
          name: "Valami",
          image: "example.jpg",
          price: 1860,
          isOnDiscount: false,
          discount: null,
          isAvailable: false,
          isSpecial: true
        },
        {
          name: "Pork fat",
          image: "example.jpg",
          price: 250,
          isOnDiscount: true,
          discount: 90,
          isAvailable: true,
          isSpecial: false
        },
                {
          name: "Product Name",
          image: "example.jpg",
          price: 150,
          isOnDiscount: true,
          discount: 68,
          isAvailable: true,
          isSpecial: false
        },
        {
          name: "Name",
          image: "example.jpg",
          price: 350,
          isOnDiscount: true,
          discount: 160,
          isAvailable: false,
          isSpecial: true
        },
        {
          name: "Eggs",
          image: "example.jpg",
          price: 850,
          isOnDiscount: false,
          discount: null,
          isAvailable: true,
          isSpecial: false
        },
        {
          name: "Valami",
          image: "example.jpg",
          price: 1860,
          isOnDiscount: false,
          discount: null,
          isAvailable: false,
          isSpecial: true
        },
        {
          name: "Pork fat",
          image: "example.jpg",
          price: 250,
          isOnDiscount: true,
          discount: 90,
          isAvailable: true,
          isSpecial: false
        },
      ]
    }
  },
};
</script>

<style lang="scss">
  @import "@/assets/styles/pages/home.scss";
</style>
