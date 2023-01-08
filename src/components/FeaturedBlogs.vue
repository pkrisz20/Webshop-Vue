<template>
    <section class="blogs">
        <div class="wrapper">
            <BlockTitle :title="$t('general.blog')" :subtitle="$t('general.blog_subtitle')" />
            <Carousel
                :navigationEnabled="true"
                :paginationEnabled="true"
                :perPageCustom="[[320, 1], [540, 2], [768, 3], [1200, 4]]"
                :navigationPrevLabel="arrowLeft"
                :navigationNextLabel="arrowRight"
                :loop="true">
                <Slide class="blogs-container" v-for="(blog, index) in blogs" :key="index">
                    <article class="blogs-container-card">
                        <div class="datetime">
                            <time class="datetime-day">{{ blog.day }}</time>
                            <time class="datetime-month">{{ blog.month }}</time>
                        </div>
                        <div class="date">
                            <time class="date-year">{{ blog.year }}</time>
                        </div>
                        <div class="image">
                            <picture>
                                <img :alt="blog.title" :src="getImage(blog.image)">
                            </picture>
                        </div>
                        <h3 class="title">{{ blog.title }}</h3>
                        <div class="bottom">
                            <small class="bottom-author">{{ blog.author }}</small>
                            <span class="bottom separator">|</span>
                            <small class="bottom-count">{{ blog.commentsCount }} comment</small>
                        </div>
                        <button class="btn">{{ $t('general.read_more') }}</button>
                    </article>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script>
import BlockTitle from "@/components/partials/BlockTitle.vue";
import { Carousel, Slide } from "vue-carousel";

    export default {
        name: "FeaturedBlogs",
        props: { blogs: Array },
        components: { BlockTitle, Carousel, Slide },
        data() {
            return {
                arrowRight: '<i class="fas fa-chevron-right"></i>',
                arrowLeft: '<i class="fas fa-chevron-left"></i>',
            }
        },
        methods: {
            getImage(image) {
                return require(`../assets/images/${image}`);
            },
        }
    }
</script>