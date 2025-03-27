<template>
    <main>
        <MarketCard :new-arr="newArr" :after="after" :before="before"/>
    </main>
</template>
<script>
import MarketCard from './MarketCard.vue';

export default {
    components: {MarketCard},
    props: ["newArr", "after", "before"],
    name: "MarketCardField",
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    main {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        width: 80%;
        height: max-content;
    }
</style>