<template>
    <div class="notifications-list" v-if="notifications.length > 0">
        <NotificationMessage v-for="(item, index) in notifications" :key="index" :type="item.type" :content="item.message" :ID="item.id" />
    </div>
</template>

<script>
import NotificationMessage from "@/components/NotificationMessage.vue";
import { mapState } from "vuex";

    export default {
        name: "NotificationList",
        components: {
            NotificationMessage
        },
        computed: {
            ...mapState({
                notifications: state => state.notifications,
            }),
        },
    }
</script>

<style lang="scss">
    .notifications-list {
        position: fixed;
        z-index: 50;
        bottom: 20px;
        top: 90px;
        right: 15px;
        width: 350px;
        height: auto;
        overflow: hidden;
        @include flexBox("flex-start");
        flex-direction: column;
    }
</style>