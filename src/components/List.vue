<template>
    <section>
        <div class="wrapper">
            <div class="list">
                <div class="list_image">
                    <picture>
                        <img alt="moviepicture" src="../assets/images/example.jpg">
                    </picture>
                </div>
                <div class="list_image">
                    <picture>
                        <img alt="moviepicture" src="../assets/images/example.jpg">
                    </picture>
                </div>
                <div class="list_image">
                    <picture>
                        <img alt="moviepicture" src="../assets/images/example.jpg">
                    </picture>
                </div>
                <div class="list_image">
                    <picture>
                        <img alt="moviepicture" src="../assets/images/example.jpg">
                    </picture>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "List",
    }
</script>

<style lang="scss" scoped>
.list {
    @include gridBox();

    &_image {
        @include respImage(0.95);
    }
}
</style>