<template>
    <div class="container">
        <TimerTime>{{ time }}</TimerTime>
        <TimerButtons 
        :pressed-button="pressedButton"
        :is-btn-disabled="isBtnDisabled"
        @start-time="startTime"
        @stop-time="stopTime"
        @reset-time="resetTime"/>
    </div>
</template>
<script>
import TimerButtons from './TimerButtons.vue';
import timerMixin from './timerMixin';
import TimerTime from './TimerTime.vue';

export default {
    name: "TimerDisplay",
    components: {TimerButtons, TimerTime},
    mixins: [timerMixin],
    data() {
        return {
            isBtnDisabled: false,
            pressedButton: {
                startBtn: false,
                stopBtn: false,
                resetBtn: false
            },
        }
    },
    methods: {
        startTime() {
            this.clearObjectValues();
            this.pressedButton.startBtn = true;
            this.isBtnDisabled = true;
            this.startTimer();
        },

        stopTime() {
            this.clearObjectValues();
            this.pressedButton.stopBtn = true;
            this.isBtnDisabled = false;
            this.stopTimer();
        }, 

        resetTime() {
            this.clearObjectValues();
            this.pressedButton.resetBtn = true;
            this.isBtnDisabled = false;
            this.resetTimer();
        },

        clearObjectValues() {
            for (let key in this.pressedButton) {
                this.pressedButton[key] = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        width: 900px;
        max-width: 100%;
        margin: 200px auto;
        display: flex;
        flex-direction: column;
    }
</style>