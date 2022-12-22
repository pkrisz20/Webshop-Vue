<template>
    <div class="message" :class="type">
        <p class="message-content">{{ content }}</p>
        <button @click="closeNotification()" class="message-close">X</button>
    </div>
</template>

<script>
    export default {
        name: "NotificationMessage",
        props: {
            content: String,
            type: { default: "info" },
            ID: String
        },
        methods: {
            closeNotification() {
                this.$store.dispatch("removeNotification", this.$props.ID);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .message {
        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 20px;
        color: $c-white;
        padding: 15px;
        position: relative;

        &-content {
            font-size: 15px;
            margin-right: 20px;
        }

        &.info {
            background-color: $c-info;
        }
        &.error {
            background-color: $c-error;
        }
        &.success {
            background-color: $c-success;
        }
        &.warning {
            background-color: $c-warning;
        }

        &-close {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            font-size: 18px;
            font-weight: 700;
            color: $c-white;
            cursor: pointer;
            background-color: transparent;
        }
    }
</style>