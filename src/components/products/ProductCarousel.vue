<template>
    <section class="products-carousel">
        <div class="wrapper">
            <BlockTitle title="Products" subtitle="Some of our featured products" />
            <Carousel
                :navigationEnabled="true"
                :paginationEnabled="false"
                :perPageCustom="[[320, 1], [540, 2], [768, 3], [1200, 4]]"
                :navigationPrevLabel="arrowLeft"
                :navigationNextLabel="arrowRight"
                :loop="true">
                <Slide class="slide" v-for="(product, index) in products" :key="index">
                    <div @click="routeToDetails(product.id)" class="products-carousel-product">
                        <div class="products-carousel-product_image">
                            <span v-if="product.isOnDiscount" class="badge badge-discount">Discount</span>
                            <span v-if="product.isSpecial" class="badge badge-special">Special</span>
                            <picture>
                                <img alt="moviepicture" :src="getImage(product.image)">
                            </picture>
                        </div>
                        <div class="products-carousel-product_desc">
                            <h2 class="title">{{ product.name }}</h2>
                            <div class="price" :class="{ discount : product.isOnDiscount }">{{ product.price }} RSD</div>
                            <div v-if="product.isOnDiscount" class="discount-price">{{ product.discount }} RSD</div>
                            <button @click.stop="addCart(product.id)" v-if="product.isAvailable" class="cart-btn"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                            <small class="unavailable" v-else><i class="fas fa-times-circle"></i> Out of stock</small>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import BlockTitle from "@/components/partials/BlockTitle.vue";

    export default {
        name: "ProductCarousel",
        components: {
            Carousel,
            Slide,
            BlockTitle,
        },
        props: { products: Array },
        data() {
            return {
                arrowRight: '<i class="fas fa-chevron-right"></i>',
                arrowLeft: '<i class="fas fa-chevron-left"></i>',
            }
        },
        methods: {
            getImage (image) {
                return require(`../../assets/images/${image}`);
            },
            addCart (productId) {
                console.log(`Added to cart ${productId}`);
            },
            routeToDetails (id) {
                this.$router.push({ path: `/product/${id}` });
            }
        }
    }
</script>