<template>
        <div class="container">
            <h1>{{ newsTitle }}</h1>
            <button @click="skip = false, $emit('incrementOpen')" v-if="skip">Открыть</button>
            <button @click="skip = true, $emit('decrementOpen')" v-else>Закрыть</button>
            <div :class="{'info': true, 'skipInfo': skip}">
                <span>{{ newsDescription }}</span>
                <div class="buttons">
                    <button class="readNews" @click="$emit('incrementRead')">Прочесть новость</button>
                    <button class="noRead" @click="$emit('decrementRead')">Отметить непрочитанной</button>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: 'News',
        props: ['newsTitle', 'newsDescription'],
        emits: ['incrementOpen', 'decrementOpen', 'incrementRead', 'decrementRead'],
        data() {
            return {
                skip: true
            }
        }, methods: {

        }
    }
</script>
<style scoped>

    .container {
        background-color: #fff;
        width: 40%;
        margin: 30px auto;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 10px 10px 10px 10px;
    }

    .container > h1 {
        margin-bottom: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: xx-large;
        font-weight: bolder;
    }

    .container > button {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        border: 2px solid green;
        color: green;
        background-color: #fff;
        cursor: pointer;
    }

    .container > button:hover {
        box-shadow: 2px 2px 2px 2px;
        background-color: green;
        color: #fff;
        transition: all 0.5s ease;
    }

    .info {
        margin-top: 40px;
        border-top: 2px solid grey;
        padding: 20px 20px 0;

    }

    .buttons {
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        width: 50%;
    }

    .buttons > button {
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;;
    }

    .readNews {
        background-color: green;
        color: #fff;
        border: 2px solid white;
    }

    .readNews:hover {
        background-color: white;
        color: green;
        transition: all 0.5s ease;
        border: 1px solid green;
    }

    .noRead {
        background-color: orangered;
        color: #fff;
        border: 2px solid orangered;
    }

    .noRead:hover {
        background-color: white;
        color: orangered;
        transition: all 0.5s ease;
        border: 1px solid orangered;
    }

    .info > span {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: larger;
        font-style: italic;
    }

    .skipInfo {
        height: 0;
        display: none;
    }
</style>