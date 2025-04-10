<template>
    <div class="card" @click="$emit('chooseCard')">
            <div class="info-first">{{ postTitle }}</div>
            <div class="info-last">{{ postBody }}</div>
    </div>
</template>
<script>
export default {
    name: "PostsCard",
    props: ["postTitle", "postBody"],
    emits: ["chooseCard"]
}
</script>
<style lang="scss">
    .card {
        height: 300px;
        overflow-y: hidden;
        margin: 15px;
        width: 20%;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 5px grey;
        cursor: pointer;
    }

    .card > img{
        margin: 10px;
    }

    .card:hover {
        box-shadow: 10px 10px 10px grey;
        cursor: pointer;
    }

    .info-first {
        border: 1px solid grey;
        border-bottom: 2px solid grey;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

    .info-last {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

</style>