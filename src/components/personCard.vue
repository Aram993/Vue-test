<template>
        <div class="cards-wrapper">
            <button class="delete-btn" v-if="selectedCardIndex.length > 0" v-on:click="deleteAllCards">УДАЛИТЬ</button>
            <form class="form">
            <div class="name">
                <label for="name">Введите Ваше имя:</label>
                <input type="text" id="name" v-on:change="getUserName" required v-bind:value = "userName">
            </div>
            <div class="name">
                <label for="Lname">Введите Вашу фамилию:</label>
                <input type="text" id="Lname" v-on:change="getUserSurname" required v-bind:value = "userSurname">
            </div>
            <div class="name">
                <label for="Email">Введите Ваш Email:</label>
                <input type="email" id="Email" v-on:change="getUserEmail" required v-bind:value = "userEmail">
            </div>
            <div class="name">
                <label for="pass">Введите Ваш пароль:</label>
                <input type="password" id="pass" v-on:change="getUserPassword" required v-bind:value = "userPassword">
            </div>
            <input type="submit" class="btn" v-on:click.prevent="getData" value="Добавить пользователя"></input>
            <!-- <button v-if="condition" class="btn">1</button>
            <button v-else-if="condition" class="btn">2</button>
            <button v-else class="btn">3</button> -->
        </form>
        <div class="field">
            <div v-bind:class="{'card': true, 'redLine': selectedCardIndex.includes(idx)}" v-for="(item, idx) in userArray" v-bind:id="idx" v-on:click="toggleDataToArray(idx)">
                <div v-bind:id="idx">
                    <div class="description">Name:</div>
                    <span>{{ item.name }}</span>
                </div>
                <div v-bind:id="idx">
                    <div class="description">Lastname:</div>
                    <span>{{ item.lastName }}</span>
                </div>
                <div v-bind:id="idx">
                    <div class="description">Email:</div>
                    <span>{{ item.email }}</span>
                </div>
                <div v-bind:id="idx">
                    <div class="description">Password:</div>
                    <span>{{ item.password }}</span>
                </div>
            </div>
        </div>
        </div>

</template>
<script>
    import bin from '@/assets/images/trash.svg'
    export default {
        name: 'personCard',
        data() {
            return {
                bin,
                userName: "",
                userSurname: "",
                userEmail: "",
                userPassword: "",
                userArray: [],
                stars: "",
                redBorder: false,
                selectedCardIndex: [],
                condition: true
            }
        },
        methods: {
           getUserName(event) {
                this.userName = event.target.value;
           },
           getUserSurname(event) {
                this.userSurname = event.target.value;
           },
           getUserEmail(event) {
                this.userEmail = event.target.value;
           },
           getUserPassword(event) {
                this.userPassword = event.target.value;
           },
           getData() {
                if (this.userName.length === 0 || this.userSurname.length === 0 || this.userEmail.length === 0 || this.userPassword.length === 0) {
                    alert("Заполните форму полностью!");
                } else if (!this.userEmail.includes("@") || !this.userEmail.includes(".")) {
                    alert("Адрес электронной почты должен содержать знак @ и .");
                } else {
                    this.stars = "";
                    this.userArray.push({
                        name: this.userName,
                        lastName: this.userSurname,
                        email: this.userEmail,
                        password: this.getStars()
                    });

                    this.userName = "";
                    this.userSurname = "";
                    this.userEmail = "";
                    this.userPassword = "";
                }
            },  
            getStars() {
                for (let i = 0; i < this.userPassword.length; i++) {
                    this.stars += "*"
                }
                return this.stars;
            },

            toggleDataToArray(value) {
                if (this.selectedCardIndex.includes(value)) {
                    this.selectedCardIndex = this.selectedCardIndex.filter(item => {
                        return item !== value;
                    })
                } else {
                    this.selectedCardIndex.push(value);
                }
            },
            deleteAllCards() {
                this.userArray = this.userArray.filter((_, idx) => !this.selectedCardIndex.includes(idx));
                this.selectedCardIndex = [];
            }
        }
    }
</script>
<style>

    .form > .btn {
        height: 40px;
        margin: 0 auto;
        width: 300px;
        border-radius: 10px;
        cursor: pointer;
        background-color: black;
        color: #fff;

    }

    .form {
        display: flex;

        padding: 15px;
        flex-direction: column;
        gap: 20px;
        width: 550px;
        border: 4px solid brown;
        background-color: #fff;
    }

    .name {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 5px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 22px;
        font-weight: bolder;
        font-style: italic;
        color: mediumblue;
    }

    .name > label {
        cursor:pointer;
    }

    .name > input {
        outline: none;
        height: 30px;
        border-color: mediumblue;
        border-radius: 7px;
    }

    .field {
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 97%;
        margin: 15px;
        height: 600px;
        background-color: #fff;
    }

    .card {
        width: 350px;
        height: max-content;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .card > div {
        border: 2px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > div > span {
        color: red;
        display: block;
        padding-right: 20px;
    }

    .description {
        font-family: 'Times New Roman', Times, serif;
        font-size: 22px;
        padding: 10px;
        height: 100%;
        width: 35%;
        font-weight: bolder;
        font-style: italic;
        color: mediumblue;
        border-right: 2px solid black;
    }

    .redLine {
        border: 5px solid red;
    }

    .delete-btn {
        position: absolute;
        top: 50px;
        right: 50px;
        background: red;
        color: white;
        cursor: pointer;
    }

</style>
