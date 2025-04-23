<template>
    <div :class="['container', themeType]">
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo soluta praesentium modi veniam, aliquam recusandae rem officiis maiores totam in, dolores odio! Maxime corporis magni, consequuntur quam accusantium sit.</p>
        <h2>Header</h2>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими напоивший переписали продолжил большого речью, образ текст грустный семантика власти своего это первую единственное домах они! Точках, сих текстами!</p>
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo soluta praesentium modi veniam, aliquam recusandae rem officiis maiores totam in, dolores odio! Maxime corporis magni, consequuntur quam accusantium sit.</p>
        <h2>Header</h2>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими напоивший переписали продолжил большого речью, образ текст грустный семантика власти своего это первую единственное домах они! Точках, сих текстами!</p>
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo soluta praesentium modi veniam, aliquam recusandae rem officiis maiores totam in, dolores odio! Maxime corporis magni, consequuntur quam accusantium sit.</p>
        <h2>Header</h2>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими напоивший переписали продолжил большого речью, образ текст грустный семантика власти своего это первую единственное домах они! Точках, сих текстами!</p>
    </div>
    <div class="btns">
        <button @click="chooseDarkTheme">DarkTheme</button>
        <button @click="chooseLightTheme">LightTheme</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            themeType: ""
        }
    },
    methods: {
        chooseDarkTheme() {
            this.$setTheme('darkBackground');
            this.$getTheme();
            this.themeType = "whiteBorder";
        },
        chooseLightTheme() {
            this.$setTheme('lightBackground');
            this.$getTheme();
            this.themeType = "blackBorder";
        }
    },
    mounted() {
        this.$getTheme();
    }
}
</script>
<style lang="scss" scoped>
    .container {
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        padding: 20px;
        text-align: center;
        gap: 20px;
        width: 900px;
        border: 2px solid white;
    }

    .btns {
        margin: 20px 500px;
        width: 900px;
        display: flex;
        justify-content: space-around;

        > button {
            width: 200px;
            cursor: pointer;
        }
    }

    .blackBorder {
        border: 2px solid black;
    }

    .whiteBorder {
        border: 2px solid white;
    }
</style>