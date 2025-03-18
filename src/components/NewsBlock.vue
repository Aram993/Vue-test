<template>
        <div class="cont">
            <h1>Актуальные новости: 18.03.2025</h1>
            <div class="info">
                <div class="counters">
                    <span>Открыто: {{ open }}</span>
                    <div></div>
                    <span>Прочитано: {{ read }}</span>
                </div>

            </div>
        </div>
        <News v-for="item in newsArray" :key="item.title" 
        :news-title="item.title" 
        :news-description="item.description"
        @increment-open="incrementOpenCount"
        @decrement-open="decrementOpenCount"
        @increment-read="incrementReadCount"
        @decrement-read="decrementReadCount"/>
</template>
<script>
    import News from './News.vue';

    export default {
        name: 'NewsBlock',
        components: {News},
        data() {
            return {
                open: 0,
                read: 0,
                newsArray: [
                    {
                        title: "Путин и Трамп завершили телефонный разговор",
                        description: "Телефонный разговор президентов России и США Владимира Путина и Дональда Трампа завершился."
                    },
                    {
                        title: "Путин: Запад ввёл против России 28 595 санкций",
                        description: "Против российских компаний и физических лиц введено 28 595 санкций, сообщил президент РФ Владимир Путин на заседании съезда Российского союза промышленников и предпринимателей (РСПП)."
                    },
                    {
                        title: "Греф допустил разворот денежно-кредитной политики ЦБ",
                        description: "В 2024 году Банк России три раза подряд повышал ключевую ставку на фоне инфляции, быстрого роста кредитования и повышенных инфляционных ожиданий."
                    }
                ]
            }
        }, methods: {
            incrementOpenCount() {
                this.open ++;
            },
            decrementOpenCount() {
                this.open --;
            },
            incrementReadCount() {
                this.read ++;
            },
            decrementReadCount() {
                this.read --;
            }
        }
    }
</script>
<style scoped>

    .cont {
        background-color: #fff;
        width: 40%;
        margin: 5px auto;
        border-radius: 10px;
        padding: 30px;
    }

    .cont > h1 {
        margin-bottom: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: xx-large;
        font-weight: bolder;
    }

    .info {
        margin-top: 40px;
        border-top: 2px solid grey;
        padding: 20px 20px 0;

    }

    .counters {
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        width: 50%;
    }

    .counters > div {
        height: 25px;
        width: 2px;
        border: 1px solid black;
    }
</style>
