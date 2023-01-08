<template>
    <div class="product-details">
        <div class="wrapper">
            <div class="details">
                <div class="details-gallery">
                    <picture>
                        <!-- HERE GOES THE productDetails.images[0] -->
                        <img class="details-thumbnail" src="https://i.imgur.com/fsyrScY.jpg" @click="galleryToggler = !galleryToggler">
                    </picture>

                    <!-- HERE GOES THE productDetails.images ARRAY -->
                    <FsLightbox
                        :toggler="galleryToggler"
                        :sources="[
                            'https://i.imgur.com/fsyrScY.jpg',
                            'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                        ]"
                    />
                </div>
                <div class="details-desc">
                    <h1 class="details-desc-title">{{ productDetails.name }}</h1>
                    <div class="details-desc-discount-price" v-if="productDetails.isOnDiscount">{{ productDetails.discount }} RSD</div>
                    <div class="details-desc-price" :class="{ discount : productDetails.isOnDiscount }">{{ productDetails.price }} RSD</div>
                    <small class="details-desc-unavailable" v-if="!productDetails.isAvailable"><i class="fas fa-times-circle"></i> {{ $t('products.out_of_stock') }}</small>

                    <div class="details-desc-functions">
                        <small v-if="productDetails.isAvailable" class="available"><i class="fas fa-check-circle"></i> {{ $t('products.available') }}</small>

                        <div class="quantities" v-if="productDetails.isAvailable">
                            <button @click="decreaseQuantity()" class="quantities-btn minus">-</button>
                            <input class="quantities-input" type="number" v-model="quantityValue" min="1"/>
                            <button @click="increaseQuantity()" class="quantities-btn plus">+</button>
                        </div>

                        <div class="buttons">
                            <button v-if="productDetails.isAvailable" class="buttons-cart" @click="addCart(productDetails.id)"><i class="fas fa-shopping-cart"></i> {{ $t('products.add_cart') }}</button>
                            <button class="buttons-fav" @click="addFavs(productDetails.id)"><i class="fas fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs class="tabs">
                <Tab name="Description" :selected="true">
                    <p>{{ productDetails.description }}</p>
                </Tab>
                <Tab name="Parameters" :selected="false">
                    <p>{{ productDetails.parameters }}</p>
                </Tab>
                <Tab name="Variants" :selected="false">
                    <p>{{ productDetails.variants }}</p>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
import Tabs from "@/components/tabs/Tabs.vue";
import Tab from "@/components/tabs/Tab.vue";

    export default {
        name: "ProductDetails",
        components: { FsLightbox, Tabs, Tab },
        data () {
            return {
                galleryToggler: false,
                quantityValue: 1,   // this has to be converted into integer before usage
                productDetails: {
                    id: parseInt(this.$route.params.productid),
                    name: "Product Name",
                    images: [],
                    price: 3860,
                    isOnDiscount: true,
                    discount: 1500,
                    isAvailable: true,
                    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    parameters: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    variants: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
            }
        },
        methods: {
            addCart () {
                this.quantityValue = typeof(this.quantityValue) !== "number" ? parseInt(this.quantityValue) : this.quantityValue;
                if (this.quantityValue < 1) this.quantityValue = 1;
            },
            increaseQuantity () {
                this.quantityValue++;
            },
            decreaseQuantity () {
                if (this.quantityValue <= 1) return;
                this.quantityValue--;
            },
        },
    }
</script>

<style lang="scss">
    @import "@/assets/styles/pages/product-details.scss";
</style>