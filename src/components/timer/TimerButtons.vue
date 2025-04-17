<template>
    <div class="buttons">
        <button :class="{'start': true, 'pressed-button': pressedButton.startBtn, 'disabled-buttons': !isBtnDisabled}" :disabled="isBtnDisabled" @click="$emit('startTime')">Start</button>
        <button :class="{'stop': true, 'pressed-button': pressedButton.stopBtn, 'disabled-buttons': isBtnDisabled}" :disabled="!isBtnDisabled" @click="$emit('stopTime')">Stop</button>
        <button :class="{'reset': true, 'pressed-button': pressedButton.resetBtn, 'disabled-buttons': isBtnDisabled}" :disabled="!isBtnDisabled" @click="$emit('resetTime')">Reset</button>
    </div>
</template>
<script>
export default {
    name: "TimerButtons",
    props: ["pressedButton","isBtnDisabled"],
    emits: ["startTime", "stopTime", "resetTime"]
}
</script>
<style lang="scss" scoped>
    .buttons {
        width: 400px;
        > button {
            width: 33.3%;
            height: 50px;
            border-radius: 5px;
            color: maroon;
            font-weight: bolder;
        }
    }

    .start {
        background-color: rgb(45, 143, 45);
    }

    .stop {
        background-color: rgb(236, 236, 27);
    }

    .reset {
        background-color: rgb(240, 66, 66);
    }

    .pressed-button {
        border: 4px solid brown;
    }

    .disabled-buttons {
        cursor: pointer;
    }
</style>