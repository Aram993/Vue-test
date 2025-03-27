<template>
    <div :class="{'card': true, 'range': checkPriceInRange(item)}" v-for="item in newArr">
            <img src="https://placehold.co/150x100" alt="product">
            <div class="info">{{ item.name }}</div>
            <div class="info">{{ item.isAvailable ? item.price + " рублей" : "Нет в наличии"}}</div>
    </div>
</template>
<script>
export default {
    name: "MarketCard",
    props: ["newArr", "after", "before"],
    data() {
        return {
        }
    }, methods: {
        checkPriceInRange(el) {
            return (el.price >= this.before && el.price <= this.after) && (el.isAvailable);
        }
    }
}
</script>
<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        margin: 30px;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 5px grey;
    }

    .card > div {
        border: 1px solid grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

    .card > img{
        margin: 20px;
    }

    .card:hover {
        box-shadow: 10px 10px 10px grey;
        cursor: pointer;
    }

    .range {
        border: 6px solid red;
        margin: 20px;
    }

</style>