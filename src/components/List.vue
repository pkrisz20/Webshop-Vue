<template>
    <div class="list">
        <div class="list_card">
            <div class="list_card_image">
                <img alt="moviepicture" src="../images/vue.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../images/vue.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../images/vue.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../images/vue.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
    }
</script>

<style lang="scss" scoped>
.list {
    padding-top: 80px;
    @include gridBox();
}
</style>