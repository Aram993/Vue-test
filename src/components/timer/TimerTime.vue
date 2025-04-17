<template>
    <div class="time">
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<script>
export default {
    name: "TimerTime"
}
</script>
<style lang="scss">
    .time {
        width: 400px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        > p {
            width: 100%;
            height: 100%;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 150px;
            font-weight: bolder;
            color: maroon;
        }
    }
</style>