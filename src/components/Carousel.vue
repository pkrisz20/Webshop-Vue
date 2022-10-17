<template>
    <carousel
        :paginationEnabled="this.$props.pagination"
        :navigationEnabled="this.$props.navigation"
        :navigationPrevLabel="arrowLeft"
        :navigationNextLabel="arrowRight"
        :perPageCustom="this.$props.responsive"
        :navigationClickTargetSize="20"
        :loop="true">
            <slot></slot>
    </carousel>
</template>

<script>
import { Carousel } from "vue-carousel";

    export default {
        name: "CarouselComponent",
        props: {
            pagination: Boolean,
            navigation: Boolean,
            responsive: Array
        },
        components: {
            Carousel,
        },
        data() {
            return {
                arrowRight: '<i class="fas fa-chevron-right"></i>',
                arrowLeft: '<i class="fas fa-chevron-left"></i>',
            }
        },
    };
</script>

<style lang="scss">
.section-name {
    .VueCarousel {
        width: 100%;
        height: 100%;
        .VueCarousel-wrapper {
            margin: 0 auto;
            max-width: 90%;
            height: 100%;
            
            @media #{$r-max-l} {
                max-width: 80%;
            }
            .VueCarousel-inner {
                height: 100%;
                display: flex;
                align-items: stretch;
                .VueCarousel-slide {
                    width: 100%;
                    padding: 0 5px;
                    cursor: pointer;
                    position: relative;
                    &::before {
                        position: absolute;
                        content: "";
                        top: 0;
                        right: 5px;
                        left: 5px;
                        width: calc(100% - 10px);
                        height: 100%;
                        background-color: $c-black;
                        opacity: 0;
                        transition: opacity .3s ease-in-out;
                        pointer-events: none;
                    }
                    span {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        color: $c-white;
                        font-size: 20px;
                        opacity: 0;
                        transition: opacity .3s ease-in-out;
                        pointer-events: none;
                    }
                    img {
                        @include imageCover();
                        border-radius: 3px;
                    }
                    &:hover::before {
                        opacity: 0.75;
                    }
                    &:hover {
                        span {
                            opacity: 1;
                        }
                    }
                }
            }
        }
        .VueCarousel-navigation{
            .VueCarousel-navigation-button {
                border-radius: 5px;
                padding: 10px !important;
                color: transparent;
                transform: translateY(-50%);

                &:focus {
                    outline: none;
                }
                
                &.VueCarousel-navigation-next {
                    margin-left: 0 !important;
                    @media #{$r-max-m} {
                        transform: translateY(-50%) translateX(-25%);
                    }
                    @media #{$r-max-s} {
                        transform: translateY(-50%) translateX(0);
                    }
                }
                &.VueCarousel-navigation-prev {
                    margin-right: 0 !important;
                    @media #{$r-max-m} {
                        transform: translateY(-50%) translateX(25%);
                    }
                    @media #{$r-max-s} {
                        transform: translateY(-50%) translateX(0);
                    }
                }

                i {
                    font-size: 35px;
                    color: $c-3;
                    
                    @media #{$r-max-s} {
                        font-size: 25px;
                    }
                }
            }
        }

        .VueCarousel-pagination {
            .VueCarousel-dot-container {
                width: auto;
                margin: 0 auto;
                text-align: center;

                .VueCarousel-dot {
                    margin-top: 0 !important;
                    background-color: $c-9 !important;

                    &:focus {
                        outline: none;
                    }

                    &--active {
                        background-color: $c-black !important;
                    }
                }
            }
        }
    }
}
</style>