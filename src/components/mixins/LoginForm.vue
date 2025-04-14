<template>
    <form>
        <div>
            <label for="email">Введите Ваш Email:</label>
            <input type="email" id="email" :value="userEmail" @change="$emit('update:userEmail', $event.target.value)">
        </div>
        <div>
            <label for="pass">Введите Ваш пароль:</label>
            <input type="password" id="pass" :value="userPassword" @change="$emit('update:userPassword', $event.target.value)">
        </div>
        <input type="submit"  @click.prevent="$emit('getUserData')">
    </form>
</template>
<script>
import formMixin from './formMixin';

export default {
    name: "LoginForm",
    mixins: [formMixin],
    props: ["userEmail", "userPassword"],
    emits: ["update:userEmail", "update:userPassword", "getUserData"]
}
</script>
<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 200px;
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