<template>
    <div>
        <header class="tabs_header">
            <ul class="tabs_header__list">
                <li
                    class="tabs_header__list-item"
                    v-for="(tab, index) in tabs" :key="index"
                    :class="{ 'is-active' : tab.isActive }"
                    @click="selectTab(tab)">
                    {{ tab.name }}
                </li>
            </ul>
        </header>
        <section class="tabs_details">
            <slot></slot>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            content: Array
        },
        data() {
            return {
                tabs: []
            }
        },
        methods: {
            selectTab (selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = tab.name === selectedTab.name;
                });
            }
        },
        created() {
            this.tabs = this.$children;
        }
    }
</script>