<template>
    <div class="editor">
        <div v-for="block in blocks">
            <h1 v-if="block.type === 'title'">{{ block.value }}</h1>
            <h2 v-else-if="block.type === 'subtitle'">{{ block.value }}</h2>
            <p v-else-if="block.type === 'text'">{{ block.value }}</p>
            <img v-else :src="block.value">
        </div>
    </div>
</template>
<script>
export default {
    name: "ResumeEditor",
    props: ["blocks"]
}
</script>
<style lang="scss" scoped>
    .editor {
        width: 70%;
        padding: 20px 50px;
        background: white;
        border-radius: 10px;
        border-radius: 10px;
    }

    h1 { 
        display: block;
        font-size: 2em;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }

    h2 {
        display: block;
        font-size: 1.5em;
        margin-top: 0.83em;
        margin-bottom: 0.83em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }

    p {
        display: block;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
    }

    img {
        display: block;
        margin: 20px auto;
        border: 0;
        height: 200px;
        width: 200px;
        border-radius: 50%;
    }
</style>