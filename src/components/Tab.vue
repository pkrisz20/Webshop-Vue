<template>
    <div class="tabs_details-container" v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data() {
            return {
                isActive: false
            }
        },
        props: {
            name: { required: true },
            selected: { default: false }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>