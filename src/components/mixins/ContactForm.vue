<template>
    <form>
        <div>
            <label for="name">Введите Ваше имя:</label>
            <input type="text" id="name" :value="contactName" @change="$emit('update:contactName', $event.target.value)">
        </div>
        <div>
            <label for="contactEmail">Введите Ваше Email:</label>
            <input type="email" id="contactEmail" :value="contactEmail" @change="$emit('update:contactEmail', $event.target.value)">
        </div>
        <div>
            <label for="message">Введите Ваше сообщение:</label>
            <input type="text" id="message" :value="contactMessage" @change="$emit('update:contactMessage', $event.target.value)">
        </div>
        <input type="submit" @click.prevent="$emit('addContactData')">
    </form>
</template>
<script>
import formMixin from './formMixin';

export default {
    name: "ContactForm",
    mixins: [formMixin],
    props: ["contactName", "contactEmail", "contactMessage"],
    emits: ["update:contactName", "update:contactEmail", "update:contactMessage", "addContactData"]
}
</script>
<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 500px;
        border: 4px  solid white;
        padding: 20px;
        margin: 50px ;

        > div {
            display: flex;
            gap: 30px;
            width: 100%;
            height: 40px;

            > label {
                width: 50%;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }

            > input {
                height: 30px;
                outline: none;
            }
        }

        > input {
            width: 50%;
            height: 30px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
</style>