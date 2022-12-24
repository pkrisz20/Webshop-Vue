<template>
    <section class="gallery" v-if="images.length > 0">
        <div class="wrapper">
            <BlockTitle title="Gallery" subtitle="Animals that are amazing" />
            <div class="gallery-list">
                <div class="gallery-list-card" v-for="(item, index) in images" :key="index">
                    <picture v-if="item.source">
                        <img :alt="item.name" :src="getImage(item.source)">
                    </picture>
                    <div class="overlay">
                        <div class="overlay_content">
                            <div class="icons">
                                <i class="fas fa-link"></i>
                                <i class="far fa-eye"></i>
                            </div>
                            <h4 v-if="item.name" class="hover_title">{{ item.name }}</h4>
                            <p v-if="item.category" class="hover_sub">{{ item.category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BlockTitle from "@/components/partials/BlockTitle.vue";

    export default {
        name: "FeaturedGallery",
        components: { BlockTitle },
        props: { images: Array },
        methods: {
            getImage(image) {
                return require(`../assets/images/${image}`);
            },
        }
    }
</script>