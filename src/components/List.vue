<template>
    <div class="wrapper">
        <div class="list">
            <div class="list_card_image">
                <img alt="moviepicture" src="../assets/images/logo.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../assets/images/logo.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../assets/images/logo.png">
            </div>
            <div class="list_card_image">
                <img alt="moviepicture" src="../assets/images/logo.png">
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
    @include gridBox();
}
</style>