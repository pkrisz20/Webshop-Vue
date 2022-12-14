<template>
    <section class="hero">
        <carousel
            :paginationEnabled="true"
            :navigationEnabled="true"
            :navigationPrevLabel="arrowLeft"
            :navigationNextLabel="arrowRight"
            :navigationClickTargetSize="20"
            :perPage='1'
            :loop="true"
            :autoplay="false">

            <slide class="slide">
                <div class="box">
                    <h2 class="box-title">Ducks, pigs and much more</h2>
                    <button class="box-btn">More</button>
                </div>
                <img alt="heroimage" src="../assets/images/hero2.jpg">
            </slide>
            <slide class="slide">
                <div class="box">
                    <h2 class="box-title">See our products</h2>
                    <button class="box-btn">Webshop</button>
                </div>
                <img alt="heroimage" src="../assets/images/hero3.jpg">
            </slide>
            <slide class="slide">
                <div class="box">
                    <h2 class="box-title">We are farmers</h2>
                    <button class="box-btn">About us</button>
                </div>
                <img alt="heroimage" src="../assets/images/hero1.jpg">
            </slide>
        </carousel>
    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
    export default {
        name: "Hero",
        components: {
            Carousel,
            Slide
        },
        data() {
            return {
                arrowRight: '<i class="fas fa-chevron-right"></i>',
                arrowLeft: '<i class="fas fa-chevron-left"></i>',
            }
        },
        // props: {
        //     images: Array
        // },
        // methods: {
        //     getPath (image) {
        //         return require('../../../../server/uploads/movies/' + image);
        //     },
        //     routeDetails(movieId) {
        //         this.$router.push({ path: `/detailsguest/${movieId}` });
        //     },
        // }
    }
</script>