<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="wrapper">
                <div class="footer-logo">
                    <picture>
                        <img alt="Footer picture" :src="getImage('logo.png')" />
                    </picture>
                </div>
            </div>
        </div>
        <div class="footer-middle">
            <div class="wrapper">
                <div class="footer-middle-container">
                    <div class="footer-middle-col">
                        <h3 class="footer-title">Contact</h3>
                        <a class="footer-title-link" href="tel:0611237896"><i class="fas fa-phone-alt"></i> +061 1237896</a>
                        <a class="footer-title-link" href="tel:0631234567"><i class="fas fa-phone-alt"></i> +063 1234567</a>
                        <a class="footer-title-link" href="mail:example@gmail.com"><i class="fas fa-envelope"></i> email@gmail.com</a>
                        <a class="footer-title-link" href="/"><i class="fas fa-map-marker-alt"></i> Name of the street, Tornjoš</a>
                    </div>
                    <div class="footer-middle-col">
                        <h3 class="footer-title">Quick links</h3>
                        <a class="footer-title-link" href="/about">About us</a>
                        <a class="footer-title-link" href="/webshop">Webshop</a>
                        <a class="footer-title-link" href="/discounts">Discounts</a>
                        <a class="footer-title-link" href="/gallery">Gallery</a>
                        <a class="footer-title-link" href="/blog">Blog</a>
                        <a class="footer-title-link" href="/contact">Contact</a>
                    </div>
                    <div class="footer-middle-col">
                        <h3 class="footer-title">Support</h3>
                        <a href="/faq" class="footer-title-link"><i class="fas fa-question-circle"></i> FAQ</a>
                        <a href="/termsofuse" class="footer-title-link"><i class="fas fa-hand-point-right"></i> Terms of use</a>
                        <a href="/policy" class="footer-title-link"><i class="fas fa-shield-alt"></i> Privacy policy</a>
                        <a href="/gdpr" class="footer-title-link"><i class="fas fa-database"></i> Personal data management</a>
                    </div>
                    <div class="footer-middle-col">
                        <h3 class="footer-title">Follow us</h3>
                        <a href="/facebook" class="footer-title-link social"><i class="fab fa-facebook"></i> Facebook</a>
                        <a href="/instagram" class="footer-title-link social"><i class="fab fa-instagram"></i> Instagram</a>
                        <a href="/twitter" class="footer-title-link social"><i class="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="wrapper">
                <div class="footer-bottom-row">
                    <h4>Inkubatorska stanica &copy; {{ new Date().getFullYear() }}. All rights reserved.</h4>
                </div>
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
        background-color: $c-dark3;
        width: 100%;
        padding: 10px 0;

        & > .wrapper {
            @include flexBox();
        }
    }

    &-logo {
        width: 300px;
        picture { @include paddingBottom(80px, 300px); }
    }

    &-middle {
        background-color: $c-dark-blue;
        padding: 30px 0;

        &-container {
            @include gridBox();

            @media #{$r-max-xl} {
                grid-template-columns: repeat(2, 1fr);
            }

            @media #{$r-max-m} {
                @include flexBox("center", "flex-start", 30px);
                flex-direction: column;
                margin: 0;
            }
        }

        &-col {
            @include flexBox("flex-start", "flex-start", 20px);
            flex-direction: column;
        }
    }

    &-title {
        color: $c-d;
        margin-bottom: 15px;
        position: relative;
        text-transform: uppercase;

        &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -12px;
            width: 40px;
            height: 3px;
            background-color: $c-d;
            border-radius: 5px;
        }

        &-link {
            color: $c-a;
            transition: .2s ease-in-out;
            font-size: 16px;

            &:hover {
                color: $c-white;
            }

            i {
                margin-right: 5px;
                transform: translateY(1px);
                font-size: 18px;
            }
        }
    }

    &-bottom {
        background-color: $c-theme;
        padding: 20px 0;

        &-row {
            width: 100%;
            @include flexBox();

            & > h4 {
                color: $c-d;
                text-align: center;
            }
        }
    }
}
</style>