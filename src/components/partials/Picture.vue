<template>
    <picture :class="{ pictureClass : pictureClass != null }">
        <source v-if="imageMobile != null" media="(min-width:768px)" :srcset="imageMobile">
        <source v-if="imageSource" :srcset="imageSource">
        <img src="../../assets/images/example.jpg" alt="No picture">
    </picture>
</template>

<script>
    export default {
        name: "Picture",
        props: {
            pictureClass: {
                type: String,
                default: null
            },
            imageMobile: {
                type: String,
                deafult: null
            },
            imageSource: {
                type: String,
                required: true
            }
        }
    }
</script>