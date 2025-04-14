export default {
    data() {
        return {
           formData: {}
        }
    },

    methods: {
        validateForm() {
            let result = true;
            for (let key in this.formData) {
                if (this.formData[key].length === 0) {
                    result = false;
                }
            }
            return result;
        },

        submitForm() {
            console.log(this.formData);
        },

        resetForm() {
            this.formData = {};
        }
    }
    
}