<template>
  <div class="home">
    <Hero :content="this.hero" />
    <FeaturedCategories />
    <ProductCarousel :products="this.products" />
    <div class="more">
      <a class="more-button" href="/webshop"><i class="fas fa-arrow-right"></i> Go to Webshop</a>
    </div>

    <section class="bg">
      <div class="bg-box">
        <h3 class="bg-box--title">We love the animals</h3>
        <p class="bg-box--subtitle">Smooth reliable, responsive rebgy, perfect portfolio, unique blog layout and many many options for you</p>
        <a href="/about" class="bg-box_btn">About us</a>
        <a href="/gallery" class="bg-box_btn bg-btn">Gallery</a>
      </div>
    </section>

    <FeaturedGallery :images="this.gallery" />
    <div class="more">
      <a class="more-button" href="/gallery"><i class="fas fa-arrow-right"></i> Watch Gallery</a>
    </div>

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
import Hero from "@/components/Hero.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
import ProductCarousel from "@/components/products/ProductCarousel.vue";
import FeaturedGallery from "@/components/FeaturedGallery.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedCategories,
    ProductCarousel,
    FeaturedGallery
  },
  data() {
    return {
      tabContent: [
        {
          title: "Web",
          text: "Szoveg 1 Lorem ipsum dolor sit amet consectetur bgipisicing elit. Quos, distinctio.",
        },
        {
          title: "Mobile",
          text: "Text 2 Lorem ipsum dolor sit amet consectetur bgipisicing elit. Debitis fuga numquam iure sapiente amet quaerat doloremque dolores voluptate ab,"
        },
        {
          selected: true,
          title: "Responsive",
          text: "Text 3 Lorem ipsum dolor sit, amet consectetur bgipisicing elit. Totam, similique libero? Odit corporis magnam cupiditate iusto, sequi tenetur voluptatibus autem assumenda! Ea quo reiciendis ipsam aliquam consequatur, neque non eius"
        },
      ],
      products: [
        {
          id: 1,
          name: "Product Name",
          image: "20200505_164046.jpg",
          price: 150,
          isOnDiscount: true,
          discount: 68,
          isAvailable: true,
          isSpecial: false
        },
        {
          id: 2,
          name: "Name",
          image: "20200522_112513.jpg",
          price: 350,
          isOnDiscount: true,
          discount: 160,
          isAvailable: false,
          isSpecial: true
        },
        {
          id: 3,
          name: "Eggs",
          image: "example4.jpg",
          price: 850,
          isOnDiscount: false,
          discount: null,
          isAvailable: true,
          isSpecial: false
        },
        {
          id: 4,
          name: "Valami",
          image: "example5.jpg",
          price: 1860,
          isOnDiscount: false,
          discount: null,
          isAvailable: false,
          isSpecial: true
        },
        {
          id: 5,
          name: "Pork fat",
          image: "example2.jpg",
          price: 250,
          isOnDiscount: true,
          discount: 90,
          isAvailable: true,
          isSpecial: false
        },
        {
          id: 6,
          name: "Product Name",
          image: "example3.jpg",
          price: 150,
          isOnDiscount: true,
          discount: 68,
          isAvailable: true,
          isSpecial: false
        }
      ],
      hero: [
        {
          text: "Ducks, pigs and much more",
          image: "hero1.jpg",
          link: "/gallery",
          button: "Details"
        },
        {
          text: "See our products",
          image: "hero2.jpg",
          link: "/webshop",
          button: "Webshop"
        },
        {
          text: "We are farmers",
          image: "hero3.jpeg",
          link: "/about",
          button: "About us"
        },
      ],
      gallery: [
        {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "20200505_164046.jpg"
        },
                {
          id: 1,
          name: "Chickens as kid",
          category: "Chickens",
          source: "hero1.jpg"
        },
                {
          id: 1,
          name: "Little chickens",
          category: "Chickens",
          source: "hero2.jpg"
        },
                {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "IMG-907bbd42e63227641f00ebdb0ab68621-V.jpg"
        },
                {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "IMG-5a3d87c5705c3ece5ce7e6f8641d37f1-V.jpg"
        },
                {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "example4.jpg"
        },
                {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "received_849397825395072.jpeg"
        },
                {
          id: 1,
          name: "Goose as adult",
          category: "Goose",
          source: "12.jpg"
        },
      ]
    }
  },
};
</script>

<style lang="scss">
  @import "@/assets/styles/pages/home.scss";
</style>
