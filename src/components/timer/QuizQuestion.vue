<template>
    <div class="wrap">
        <TimerTime>{{ time }}</TimerTime>
        <div class="container">
            <div :class="{'card': true, 'next-question': index === btnId ? true : false}" v-for="(question, index) in questions" :ref="index">
                <div :id="index">{{ question }}</div>
                <button @click="changeQuestion(index)">Следующий вопрос</button>
            </div>
        </div>
    </div>
    
</template>
<script>
import timerMixin from './timerMixin';
import TimerTime from './TimerTime.vue';

export default {
    name: "QuizQuestion",
    components: {TimerTime},
    mixins: [timerMixin],
    data() {
        return {
            questions: 
                    [
                        "Какая формула описывает закон всемирного тяготения?",
                        "Как называется процесс фотосинтеза у растений?",
                        "Кто написал роман 'Евгений Онегин'?",
                        "Чему равна сумма углов треугольника?",
                        "Какой газ преобладает в составе атмосферы Земли?",
                        "Как называется крупнейшая река в Южной Америке?",
                        "В каком году произошла Великая Октябрьская социалистическая революция?",
                        "Какой химический элемент обозначается символом Fe?",
                        "Кто открыл закон сохранения массы вещества?",
                        "Как называется столица Австралии?"
                    ],

            isNext: false,
            btnId: null,
        }
    },

    methods: {
        changeQuestion(idx) {
            this.resetTimer();
            this.btnId = idx;
            this.$refs[`${idx}`][0].style.display = "none";
            this.startTimer();
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        width: 500px;
        height: 230px;
        border: 2px solid white;
        background-color: #fff;
        overflow-y: hidden;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 450px;
        height: 163px;
        margin: 35px 20px;
        height: max-content;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 5px grey;
    }

    .card > div {
        border: 1px solid grey;
        width: 100%;
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

    .card > button {
        border: 1px solid grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 10px 10px 10px grey;
    }

    .next-question {
        margin-top: -170px;
    }

    .question {
        opacity: 0;
    }

    .wrap {
        width: 900px;
        max-width: 100%;
        height: max-content;
        margin: 200px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>