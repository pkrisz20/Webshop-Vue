<template>
    <section class="articles-carousel">
        <div class="wrapper">
            <BlockTitle title="Featured products"/>
            <Carousel :navigation="true" :pagination="false" :responsive="[[320, 1], [540, 2], [768, 3], [1200, 4]]">
                <Slide class="articles-carousel-article" v-for="(product, index) in products" :key="index">
                    <div class="articles-carousel-article_image">
                        <picture>
                            <img alt="moviepicture" :src="getImage(product.image)">
                        </picture>
                    </div>
                    <h2 class="articles-carousel-article_title">{{ product.title }}</h2>
                    <p class="articles-carousel-article_description">{{ product.desc }}</p>
                    <button class="articles-carousel-article_btn"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script>
import { Slide } from "vue-carousel";
import Carousel from "@/components/Carousel.vue";
import BlockTitle from "@/components/BlockTitle.vue";

    export default {
        name: "ProductCarousel",
        components: { Carousel, Slide, BlockTitle },
        data() {
            return {
                products: [
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                    {
                        title: "Article title",
                        image: "example.jpg",
                        desc: "Description to the article and the long text which is at the below of the article card"
                    },
                ]
            }
        },
        getImage(image) {
            return require(`.../assets/images/${image}`);
        },
    }
</script>