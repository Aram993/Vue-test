<template>
    <fieldset id="priceRange">
        <legend>Диапазон цены</legend>
        <div>
            <MarketInput :placeholder-value="value_1" v-model="after"/>
            <MarketInput :placeholder-value="value_2" v-model="before"/>
        </div>
        <div>
            <button @click="$emit('sendInputValues', { first: this.after, second: this.before }), count++" v-if="count === 0">Отправить</button>
            <button @click="$emit('sendInputValues', { first: null, second: null }), clearInput(), count--" v-else> Очистить фильтр</button>
        </div>
    </fieldset>
</template>
<script>
import MarketInput from './MarketInput.vue';

export default {
    components: {MarketInput},
    props: ["firstValue", "priceAfter", "priceBefore"],
    emits: ["sendInputValues"],
    name: "MarketPriceRange",
    data() {
        return {
            value_1: "ОT...",
            value_2: "ДO...",
            after: null,
            before: null,
            count: 0
        }
    }, methods: {
        clearInput() {
            this.after = "";
            this.before = "";
        }
    }
}
</script>
<style lang="scss" scoped>
    #priceRange {
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translate(-50%, -50%);
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border: 2px solid white;
        border-radius: 10px;
        padding: 20px;
    }

    legend {
        text-align: center;
        
    }

    #priceRange > div {
        display: flex;
        align-items: center;
        gap: 10px;

        > button {
            margin: 5px;
            padding: 5px;
            background-color: white;
            border-radius: 10px;
            cursor: pointer;
            width: 200px;
            transition: all 0.5s ease;
        }

        button:hover {
            background-color: black;
            color: white;
            border-color: white;
        }
    }
</style>