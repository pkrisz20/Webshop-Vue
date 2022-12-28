<template>
    <header class="header_title">
        <h2 class="header_title-main">{{ title }}</h2>
        <p v-if="this.$props.subtitle" class="header_title-sub">{{ subtitle }}</p>
    </header>
</template>

<script>
    export default {
        name: "BlockTitle",
        props: {
            title: { type: String, required: true },
            subtitle: String
        }
    }
</script>

<style lang="scss">
    .header_title {
        font-family: $main-font;
        color: $c-2;

        &-main {
            text-transform: uppercase;
            font-size: 35px;
            width: auto;
            position: relative;

            @media #{$r-max-l} {
                font-size: 28px;
            }
            @media #{$r-max-m} {
                font-size: 25px;
            }

            &::after {
                position: absolute;
                content: "";
                left: 2px;
                bottom: -6px;
                width: 50px;
                height: 3px;
                background-color: $c-theme;
            }
        }

        &-sub {
            font-size: 20px;
            margin-top: 20px;

            @media #{$r-max-l} {
                font-size: 18px;
            }
        }
    }
</style>