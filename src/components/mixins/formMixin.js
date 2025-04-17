export default {
    data() {
        return {
           formData: {}
        }
    },

    methods: {
        validateForm() {
            for (let key in this.formData) {
                if (this.formData[key].length === 0) {
                    return false;
                }
            }

            return true;
        },

        async submitForm() {
            await this.sendForm?.();
        },

        resetForm() {
            for (let key in this.formData) {
                this.formData[key] = "";
            }
        }
    }
    
}