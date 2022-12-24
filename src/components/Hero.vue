<template>
    <section class="hero" v-if="content.length > 0">
        <carousel
            :paginationEnabled="true"
            :navigationEnabled="true"
            :navigationPrevLabel="arrowLeft"
            :navigationNextLabel="arrowRight"
            :navigationClickTargetSize="20"
            :perPage='1'
            :loop="true"
            :autoplay="true">

            <slide class="slide" v-for="(data, index) in content" :key="index">
                <div class="box">
                    <h2 v-if="data.text" class="box-title">{{ data.text }}</h2>
                    <a :href="data.link" v-if="data.button" class="box-btn">{{ data.button }}</a>
                </div>
                <img v-if="data.image" alt="heroimage" :src="getImage(data.image)">
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
        props: { content: Array },
        methods: {
            getImage(image) {
                return require(`../assets/images/${image}`);
            },
        }
        //     routeDetails(movieId) {
        //         this.$router.push({ path: `/detailsguest/${movieId}` });
        //     },
        // }
    }
</script>