export default {
    data() {
        return {
            time: "00:30",
            count: 30,
            interval: null,
            isStopped: false,
        }
    },

    methods: {
        startTimer() {
            this.isStopped = false;
            this.createTimer()
            this.interval = setInterval(this.createTimer, 1000)
        },

        createTimer() {
            if (this.isStopped) {
                clearInterval(this.interval);
                this.count++;
            }
            this.count--;
            this.time = `00:${this.count}`;
            if (this.count < 10) {
                this.time = `00:0${this.count}`
            }

            if (this.count < 1) {
                clearInterval(this.interval);
                this.isBtnDisabled = false;
                this.count = 30;
                this.time = `00:${this.count}`
            }
        },

        stopTimer() {
            this.isStopped = true;
        },

        resetTimer() {
            this.count = 31;
            clearInterval(this.interval);
            this.createTimer();
        }
    },
}