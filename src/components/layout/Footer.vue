<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="wrapper">
                <picture>
                    <img alt="Footer picture" :src="getImage('logo.png')" />
                </picture>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            getImage(image) {
                return require(`../../assets/images/${image}`);
            },
        }
    }
</script>

<style lang="scss">
.footer {
    z-index: 99;
    width: 100%;

    &-top {
        @include flexBox();
        background-color: $c-dark2;
        width: 100%;
        height: 50px;
        picture { @include respImage(0.26); }
    }
}
</style>