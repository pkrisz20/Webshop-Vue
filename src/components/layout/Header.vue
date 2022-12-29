<template>
  <header class="header" :class="{ 'header-sticky': scrollPosition > 0 }">
    <div class="header-top">
      <div class="wrapper">
        <div class="header-top-contacts">
          <a href="mailto:krisztianpasztor11@gmail.com"><i class="fas fa-envelope"></i> example@gmail.com</a>
          <a href="tel:061 5051095"><i class="fas fa-phone-alt"></i> 061 5051095</a>
          <a href="tel:061 5051095"><i class="fas fa-phone-alt"></i> 061 5051095</a>
        </div>
        <div class="header-top-socials">
          <div class="text">Follow us:</div>
          <a class="icon facebook"><i class="fab fa-facebook"></i></a>
          <a class="icon messenger"><i class="fab fa-facebook-messenger"></i></a>
          <a class="icon instagram"><i class="fab fa-instagram"></i></a>
          <a class="icon twitter"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="lang dropdown js-lang-switcher">
          <div @click="isOpenLang = !isOpenLang" class="dropdown-link">{{ $i18n.locale }}</div>

          <ul v-show="isOpenLang" class="dropdown-list">
            <li class="dropdown-list-item" @click="setLocale($event)" v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`">{{ lang }}</li>
            <!-- <li class="dropdown-list-item">
              <a href="/sr">SR</a>
            </li>
            <li class="dropdown-list-item">
              <a href="/hu">HU</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div class="wrapper">
        <a href="/" class="logo">
          <picture>
            <img class="logo-img" src="../../assets/images/logo.png" alt="logo" />
          </picture>
        </a>

        <nav class="nav">
          <ul>
            <li><router-link :to="`/${$i18n.locale}`">Home</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/about`">About us</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/webshop`">Webshop</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/discounts`">Discounts</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/gallery`">Gallery</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/blog`">Blog</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/contact`">Contact</router-link></li>
          </ul>
        </nav>

        <div class="functions">
          <button class="functions-btn"><span>9</span><i class="fas fa-heart"></i></button>
          <button class="functions-btn"><span>12</span><i class="fas fa-shopping-cart"></i></button>
          <button class="functions-btn js-hamburger-menu" @click="isOpenMobileNav = true"><i class="fas fa-bars"></i></button>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="wrapper">
        <div class="search">
          <input class="search-input" type="text" ref="search" placeholder="Search..." />
          <button @click="focusSearch" class="search-btn"><i class="fas fa-search"></i></button>

          <!-- <div class="search-results">
            <h4 class="search-results-header">Results: 5</h4>
            <div class="container">
              <router-link class="container_box" to="/">
                <div class="container_box--image">
                  <picture>
                    <source srcset="../../assets/images/example.jpg">
                    <img class="img" alt="filter picture" src="../../assets/images/logo.png" />
                  </picture>
                </div>
                <div class="container_box--title">Termek neve</div>
                <div class="container_box--date">Kategoria</div>
              </router-link>
            </div>
          </div> -->
        </div>

        <div class="functions">
          <button class="functions-btn"><span>0</span><i class="fas fa-heart"></i></button>
          <button class="functions-btn"><span>0</span><i class="fas fa-shopping-cart"></i></button>
        </div>
      </div>
    </div>

    <div class="header-mobile-nav js-mobile-menu" :class="{ 'nav-opened': isOpenMobileNav }">
      <div class="wrapper">
        <div class="close-nav" @click="isOpenMobileNav = false">
          <i class="fas fa-times"></i>
        </div>

        <div class="langs">
          <div class="langs-item current-lang">{{ $i18n.locale }}</div>
          <button class="langs-item">sr</button>
          <button class="langs-item">hu</button>
        </div>

        <div class="socials">
          <a class="icon facebook"><i class="fab fa-facebook"></i></a>
          <a class="icon messenger"><i class="fab fa-facebook-messenger"></i></a>
          <a class="icon instagram"><i class="fab fa-instagram"></i></a>
          <a class="icon twitter"><i class="fab fa-twitter"></i></a>
        </div>

        <div class="contacts">
          <a href="mailto:krisztianpasztor11@gmail.com"><i class="fas fa-envelope"></i> example@gmail.com</a>
          <a href="tel:061 5051095"><i class="fas fa-phone-alt"></i> 061 5051095</a>
          <a href="tel:061 5051095"><i class="fas fa-phone-alt"></i> 061 5051095</a>
        </div>

        <nav class="nav">
          <ul>
            <li><router-link :to="`/${$i18n.locale}`">Home</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/about`">About us</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/webshop`">Webshop</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/discounts`">Discounts</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/gallery`">Gallery</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/blog`">Blog</router-link></li>
            <li><router-link :to="`/${$i18n.locale}/contact`">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: 0,
      isOpenLang: false,
      isOpenMobileNav: false
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    focusSearch() {
      this.$refs.search.focus();
    },
    setLocale(event) {
      // console.log(event.target.value);
      this.$i18n.locale = event.target.value;
      this.$router.push({ params: { lang: event.target.value } });
    }
  },
  watch: {
    "$route": function() {
      this.isOpenMobileNav = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    document.addEventListener('click', (event) => {
      // Close the language switcher if user clicks outside of it
      if (event.target.closest('.js-lang-switcher')) return;
      this.isOpenLang = false;
      // Close the mobile nav menu if the user clicks outside of it
      if (event.target.closest('.js-hamburger-menu')) return;
      if (event.target.closest('.js-mobile-menu')) return;
      this.isOpenMobileNav = false;
    });
    // console.log(this.$i18n);
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  width: 100%;
  height: 180px;
  transition: all .3s ease-in-out;

  @media #{$r-max-l} {
    height: auto;
  }

  &-mobile-nav {
    @media #{$r-min-l} { display: none; }
    position: absolute;
    z-index: 50;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: $c-c;
    overflow-y: auto;
    transition: right .3s ease-in-out;
    @include scrollbars(4px, $c-theme);

    &.nav-opened {
      right: 0;
    }

    & > .wrapper {
      width: 100%;
      margin: 0 auto;
      padding: 15px;
      position: relative;
    }

    .close-nav {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;

      i {
        font-size: 30px;
        color: $c-dark-blue;
        transition: .2s ease-in-out;

        &:hover {
          color: $c-white;
        }
      }
    }

    .langs {
      @include flexBox("center", "center", 20px);

      &-item {
        cursor: pointer;
        width: 40px;
        height: 40px;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        background: transparent;
        color: $c-dark-blue;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        border: 1px solid $c-dark-blue;
        transition: all .2s ease-in-out;

        &:hover {
          border: 1px solid $c-white;
          color: $c-white;
        }

        &.current-lang {
          background-color: $c-theme;
          color: $c-white;
          border: 1px solid $c-theme;
        }
      }
    }

    .socials {
      margin: 20px 0;
      @include flexBox("center", "center", 20px);

      .icon {
        font-size: 24px;
        color: $c-4;
        transition: .2s ease-in-out;

        &:hover {
          color: $c-9;
        }
      }
    }

    .contacts {
      @include flexBox("center", "flex-start", 8px);
      flex-direction: column;

      & > a {
        transition: .2s ease-in-out;
        color: $c-4;

        &:hover {
          color: $c-white;
        }
      }
    }

    .nav {
      margin: 15px 0 0;

      & > ul {
        @include flexBox("center", "flex-start");
        flex-direction: column;

        li {
          padding: 0;
          width: 100%;
          cursor: pointer;

          &:has(a.router-link-exact-active) {
            background-color: $c-theme;
            border-radius: 5px;
          }

          a {
            margin-left: 24px;
            display: block;
            width: auto;
            height: 100%;
            font-weight: 700;
            color: $c-dark-blue;
            font-size: 18px;
            padding: 10px 0;
            transition: .3s ease-in-out;

            &:hover {
              color: $c-9;
            }

            &.router-link-exact-active {
              color: $c-white;
            }
          }
        }
      }
    }
  }

  &-top {
    background-color: $c-dark-blue;

    @media #{$r-max-l} {
      display: none;
    }

    & > .wrapper {
      @include flexBox("space-evenly");
      padding: 7px 15px;
    }

    &-contacts {
      display: flex;
      gap: 15px;

      a {
        color: $c-a;
        transition: .3s ease-in-out;
        font-size: 16px;

        @media #{$r-max-l} {
          font-size: 14px;
        }

        &:hover {
          color: $c-white;
        }
      }
    }

    &-socials {
      @include flexBox("center", "center", 20px);

      .text {
        color: $c-a;
        @media #{$r-max-l} {
          font-size: 14px;
        }
      }

      .icon {
        font-size: 20px;
        color: $c-a;
        transition: .3s ease-in-out;
        @media #{$r-max-l} {
          font-size: 17px;
        }

        &:hover {
          color: $c-white;
        }
      }
    }

    .dropdown {
      position: relative;

      &-link {
        color: $c-a;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        border-radius: 8px;
        transition: all .3s ease-in-out;

        &:hover {
          color: $c-white;
        }
      }

      &-list {
          border-radius: 5px;
          overflow: hidden;
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          z-index: 50;

          &-item {
            padding: 5px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            transition: .2s ease-in-out;
            background-color: $c-dark-blue;

            &:hover {
              background-color: $c-theme;

              a {
                color: $c-white;
              }
            }

            a {
              color: $c-a;
              transition: .2s ease-in-out;
            }

            &:not(:last-child) {
              border-bottom: 1px solid $c-a;
            }
          }
      }
    }
  }

  &-middle {
    background-color: $c-e;

    .wrapper {
      transition: padding .2s ease-in-out;
      padding: 15px;
      @include flexBox("space-between");

      @media #{$r-max-xl} {
        padding: 15px 30px;
      }

      & > .functions {
        display: none;
        align-items: center;
        gap: 24px;

        @media #{$r-max-l} {
          display: flex;
        }

        .functions-btn {
          background-color: transparent;
          cursor: pointer;
          position: relative;

          span {
            @include flexBox();
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(70%, -70%);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            color: $c-e;
            background-color: $c-dark-blue;
          }

          i {
            font-size: 20px;
            color: $c-theme;
          }
        }
      }
    }

    .logo {
      display: block;
      height: 100%;
      width: 200px;
      transition: width .2s ease-in-out;

      @media #{$r-max-l} {
        width: 130px;
      }

      &-img {
        height: 100%;
        width: 100%;
        object-position: center;
        object-fit: cover;
      }
    }

    .nav {
      @media #{$r-max-l} {
        display: none;
      }

      ul {
        @include flexBox();
        gap: 35px;

        li {
          a {
            font-size: 16px;
            font-weight: bold;
            color: $c-dark-blue;
            position: relative;

            &.router-link-exact-active {
              color: $c-theme;

              &::after {
                width: 100%;
              }
            }

            &::after {
              position: absolute;
              content: "";
              bottom: -5px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 3px;
              background: $c-theme;
              transition: width .3s ease;
              border-radius: 5px;
            }

            &:hover::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  &-bottom {
    position: relative;
    background-color: $c-theme;

    & > .wrapper {
      padding: 10px 15px;
      @include flexBox("space-between");

      @media #{$r-max-xl} {
        padding: 10px 30px;
      }

      @media #{$r-max-l} {
        padding: 7px 30px;
        @include flexBox("center");
      }

      .search {
        @include flexBox();
        position: relative;

        &-input {
          height: 40px;
          width: 350px;
          border-radius: 25px 0 0 25px;
          padding: 0 15px;
          font-size: 16px;
          outline: none;
          background-color: $c-e;

          @media #{$r-max-l} {
            height: 30px;
            font-size: 14px;
          }

          @media #{$r-max-s} {
            width: auto;
          }

          &:focus {
            background-color: $c-white;
          }

          &::placeholder {
            color: $c-4;
            font-family: $main-font;
          }
        }

        &-btn {
          @include flexBox();
          background-color: $c-dark-blue;
          width: 50px;
          height: 40px;
          padding: 10px;
          cursor: pointer;
          border-radius: 0 25px 25px 0;
          @media #{$r-max-l} {
            width: 40px;
            height: 30px;
          }

          i {
            font-size: 18px;
            color: $c-e;
          @media #{$r-max-l} {
            font-size: 14px;
          }
          }
        }

        &-results {
          position: absolute;
          z-index: 5;
          top: 40px;
          left: 0;
          background-color: $c-b;
          width: 100%;
          max-height: 300px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow-y: scroll;
          @include scrollbars(6px, $c-9);

          @media #{$r-max-s} {
            top: 30px;
            left: -380px;
            transform: translateX(0);
          }
          @media #{$r-max-l} {
            width: 300px;
            left: -265px;
          }
          &-header {
            text-align: center;
            padding: 10px 0;
            color: $c-dark-blue;
          }
          .container {
            position: relative;

            &_box {
              @include flexBox("space-between", "center", 10px);
              height: auto;
              padding: 5px;
              cursor: pointer;
              text-decoration: none;

              &:not(:last-child) {
                border-bottom: 1px solid $c-6;
              }

              @media #{$r-max-l} {
                flex-direction: column;
                height: auto;
              }
              &--image {
                width: 30%;
                height: 100%;
                picture {
                  @include respImage(0.95);
                }
              }
              &--title, &--date {
                color: $c-dark-blue;
                font-size: 16px;
                font-weight: 700;
                text-align: center;
                @media #{$r-max-l} {
                  margin: 5px 0;
                }
              }
              &:hover {
                background-color: $c-dark-blue;
                .container_box--title, .container_box--date {
                  color: $c-white;
                }
              }
            }
          }
        }
      }

      .functions {
        display: flex;
        align-items: center;
        gap: 30px;

        @media #{$r-max-l} {
          display: none;
        }

        &-btn {
          background-color: transparent;
          cursor: pointer;
          position: relative;

          span {
            @include flexBox();
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(70%, -70%);
            border-radius: 50%;
            width: 25px;
            height: 25px;
            font-size: 13px;
            color: $c-e;
            background-color: $c-dark-blue;
          }

          i {
            font-size: 24px;
            color: $c-e;
          }
        }
      }
    }
  }

  @media #{$r-min-l} {
    &-sticky {
      .header-middle > .wrapper {
        padding: 5px 15px;
      }

      .logo {
        width: 160px;
      }
    }
  }
}
</style>
