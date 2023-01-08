<template>
  <div class="home">
    <Hero :content="this.hero" />
    <FeaturedCategories />
    <ProductCarousel :products="this.products" />
    <div class="more">
      <a class="more-button" href="/webshop"><i class="fas fa-arrow-right"></i> Visit Webshop</a>
    </div>

    <section class="bg">
      <div class="bg-box">
        <h3 class="bg-box--title">We love the animals</h3>
        <p class="bg-box--subtitle">Smooth reliable, responsive rebgy, perfect portfolio, unique blog layout and many many options for you</p>
        <a href="/about" class="bg-box_btn">{{ $t("nav.about") }}</a>
        <a href="/gallery" class="bg-box_btn bg-btn">{{ $t("nav.gallery") }}</a>
      </div>
    </section>

    <FeaturedGallery :images="this.gallery" />

    <FeaturedBlogs :blogs="this.blogs" />
    <div class="more">
      <a class="more-button" href="/blogs"><i class="fas fa-arrow-right"></i> Visit Our Blog</a>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
import ProductCarousel from "@/components/products/ProductCarousel.vue";
import FeaturedGallery from "@/components/FeaturedGallery.vue";
import FeaturedBlogs from "@/components/FeaturedBlogs.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedCategories,
    ProductCarousel,
    FeaturedGallery,
    FeaturedBlogs
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
      ],
      blogs: [
        {
          title: "Blog title",
          day: 24,
          month: "March",
          year: 2019,
          image: "20200505_164046.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 12
        },
        {
          title: "Event title",
          day: 31,
          month: "May",
          year: 2020,
          image: "received_3609522925785043.jpeg",
          author: "Rita Tot Horgosi",
          commentsCount: 2
        },
        {
          title: "Children visited our farm",
          day: 4,
          month: "April",
          year: 2021,
          image: "example1.jpg",
          author: "Janos",
          commentsCount: 6
        },
        {
          title: "We are tired, but we're going further",
          day: 6,
          month: "Dec",
          year: 2021,
          image: "example2.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 3
        },
        {
          title: "Pigs are so cute",
          day: 14,
          month: "Jun",
          year: 2020,
          image: "20200522_112513.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 10
        },
        {
          title: "Goose are easy to handle",
          day: 27,
          month: "Sep",
          year: 2018,
          image: "20200505_164058.jpg",
          author: "Rita Horgosi",
          commentsCount: 1
        },
                {
          title: "Blog title",
          day: 24,
          month: "March",
          year: 2019,
          image: "20200505_164046.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 12
        },
        {
          title: "Event title",
          day: 31,
          month: "May",
          year: 2020,
          image: "received_3609522925785043.jpeg",
          author: "Rita Tot Horgosi",
          commentsCount: 2
        },
        {
          title: "Children visited our farm",
          day: 4,
          month: "April",
          year: 2021,
          image: "example1.jpg",
          author: "Janos",
          commentsCount: 6
        },
        {
          title: "We are tired, but we're going further",
          day: 6,
          month: "Dec",
          year: 2021,
          image: "example2.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 3
        },
        {
          title: "Pigs are so cute",
          day: 14,
          month: "Jun",
          year: 2020,
          image: "20200522_112513.jpg",
          author: "Zoltan Tot Horgosi",
          commentsCount: 10
        },
        {
          title: "Goose are easy to handle",
          day: 27,
          month: "Sep",
          year: 2018,
          image: "20200505_164058.jpg",
          author: "Rita Horgosi",
          commentsCount: 1
        },
      ]
    }
  },
};
</script>

<style lang="scss">
  @import "@/assets/styles/pages/home.scss";
</style>
