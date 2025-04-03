<template>
     <div class="card" @click="$emit('chooseCard')">
            <img src="https://placehold.co/75x50" alt="employee">
            <div class="info">{{ name }}</div>
            <div class="info">{{ surname }}</div>
            <div class="info">{{ age }}</div>
            <div class="info">{{ country }}</div>
    </div>
</template>
<script>
import { getPersonYear } from '@/utils/dateConvert';
export default {
    name: "EmployeeCard",
    props: ["name", "surname", "age", "country"],
    emits: ["chooseCard"],
    getPersonYear,
    data() {
        return {

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
        margin: 15px;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 5px grey;
        cursor: pointer;
    }

    .card > div {
        border: 1px solid grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

    .card > img{
        margin: 10px;
    }

    .card:hover {
        box-shadow: 10px 10px 10px grey;
        cursor: pointer;
    }


</style>