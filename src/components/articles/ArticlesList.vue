<template>
    <section>
        <div class="list">
            <article class="list-item">
                <div class="list-item_image">
                    <picture>
                        <img alt="moviepicture" src="../../assets/images/example.jpg">
                    </picture>
                </div>
                <h3>Article title</h3>
                <p>Description to the article and the long text which is at the below of the article card</p>
            </article>
            <article class="list-item">
                <div class="list-item_image">
                    <picture>
                        <img alt="moviepicture" src="../../assets/images/example.jpg">
                    </picture>
                </div>
                <h3>Article title</h3>
                <p>Description to the article and the long text which is at the below of the article card</p>
            </article>
            <article class="list-item">
                <div class="list-item_image">
                    <picture>
                        <img alt="moviepicture" src="../../assets/images/example.jpg">
                    </picture>
                </div>
                <h3>Article title</h3>
                <p>Description to the article and the long text which is at the below of the article card</p>
            </article>
            <article class="list-item">
                <div class="list-item_image">
                    <picture>
                        <img alt="moviepicture" src="../../assets/images/example.jpg">
                    </picture>
                </div>
                <h3>Article title</h3>
                <p>Description to the article and the long text which is at the below of the article card</p>
            </article>
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

    &-item {
        &_image {
            picture {
                @include respImage(0.95);
            }
        }
    }

}
</style>