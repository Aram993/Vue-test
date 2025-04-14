export default {
    data() {
        return {
            isAlertOpened: false,
            task: {}
        }
    },
    methods: {
        toggleAlert() {
            this.isAlertOpened = !this.isAlertOpened
        }
    },
    mounted() {
        console.log(this.$el);
    }
}
