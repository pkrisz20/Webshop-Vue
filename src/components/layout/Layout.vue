<template>
    <div class="site-wrap">
        <Header />
            <main>
                <router-view />
            </main>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

    export default {
        name: "Layout",
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
.site-wrap {
    padding-top: 180px;
}
</style>