export default {
    data() {
        return {
            count: 30,
            interval: null,
        }
    },

    methods: {
        startTimer() {
            if(this.interval) return;

            this.interval = setInterval(() => {
                if(this.count > 0) {
                    this.count--;
                }else {
                    clearInterval(this.interval);
                    this.onTimeout?.();
                }
            }, 1000)
        },

        stopTimer() {
            clearInterval(this.interval);
            this.interval = null;
        },

        resetTimer() {
            this.count = 30;
            clearInterval(this.interval);
            this.stopTimer();
        }
    },
    beforeUnmount() {
        stopTimer();
    }
}