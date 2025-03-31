<template>
    <div class="container">
        <EmployeesModal
        v-model:person-name="employeeName"
        v-model:person-surname="employeeSurname"
        v-model:person-birth-day="employeeDateOfBirth"
        v-model:person-country="employeeCountry"
        :is-close-modal="isCloseModal"
        @close-modal="closeModal"
        @send-data="action"/>
        <div class="btn" v-if="!counter">
            <EmployeesButton :buttonValue="buttonTitle" @get-employees="getEmployees"/>
        </div>
        <main v-else>
            <div class="buttons">
                <EmployeesButton :button-value="buttonPost" @get-employees="isCloseModal = false, action = addEmployee"/>
                <EmployeesButton :button-value="buttonDelete" @get-employees="isCloseModal = false, action = deleteEmployee"/>
                <!-- <EmployeesButton :button-value="buttonEdit" @get-employees="isCloseModal = false"/> -->
            </div>
            <div class="wrapper">
                <EmployeeCard v-for="(item, index) in employees" :key="item.id" 
                :name="item.name" 
                :surname="item.surname" 
                :age="item.age" 
                :country="item.country"
                @choose-card="chooseCard(index)"/>
            </div>
        </main>
    </div>
</template>
<script>
import EmployeeCard from './EmployeeCard.vue';
import EmployeesButton from './EmployeesButton.vue';
import axios from 'axios';
import EmployeesModal from './EmployeesModal.vue';
import { getPersonYear } from '@/utils/dateConvert';

export default {
    name: "Employees",
    components: {EmployeesButton, EmployeeCard, EmployeesModal},
    getPersonYear,
    data() {
        return {
            buttonTitle: "Получить сотрудников",
            buttonPost: "Добавить сотрудника",
            buttonDelete: "Удалить сотрудника",
            buttonEdit: "Изменить данные сотрудника",
            employees: [],
            counter: 0,
            isCloseModal: true,
            employeeName: "",
            employeeSurname: "",
            employeeDateOfBirth: "",
            employeeCountry: "",
            action: "",
            arrayIndex: null
        }
    }, methods: {
        async getEmployees() {
            try {
                this.counter++;
                const response = await axios.get("http://localhost:3000/employees");
                this.employees = [...response.data];
            } catch(error) {
                console.error(error)
            };
            
        },

        clearInputs() {
            this.isCloseModal = true;
            this.employeeName = "";
            this.employeeSurname = "";
            this.employeeDateOfBirth = "";
            this.employeeCountry = "";
        },

        async addEmployee() {
            try {
                const response = await axios.post("http://localhost:3000/employees", {
                    name: this.employeeName,
                    surname: this.employeeSurname,
                    age: this.employeeDateOfBirth,
                    country: this.employeeCountry
                })
            
                this.employees.push(response.data);
                this.clearInputs();
            } catch(err) {
                console.error(err);
            }
        },

        async deleteEmployee() {
            try {
                const arr = this.employees.filter(item => {
                    return item.name.toLowerCase() === this.employeeName.toLowerCase() && item.surname.toLowerCase() === this.employeeSurname.toLowerCase();
                })

                if (arr.length === 0) {
                    alert("Данный сотрудник не найден!");
                    this.clearInputs();
                    return;
                }

                let employeeId = 0;
                arr.forEach(item => {
                    employeeId = item.id;
                })
                const response = await axios.delete(`http://localhost:3000/employees/${employeeId}`);
                this.employees = this.employees.filter(item => {
                    return item.id !== employeeId;
                })

                this.clearInputs();
            } catch(err) {
                console.error(err)
            }
        },

        chooseCard(idx) {
            this.isCloseModal = false;
            this.employeeName = this.employees[idx].name;
            this.employeeDateOfBirth = this.employees[idx].age;
            this.employeeSurname = this.employees[idx].surname;
            this.employeeCountry = this.employees[idx].country;

            this.arrayIndex = idx;
            this.action = this.editPerson
        },

        async editPerson() {
            try {
                const id = this.employees[this.arrayIndex].id;

                const response = await axios.put(`http://localhost:3000/employees/${id}`, {
                    name: this.employeeName,
                    age: this.employeeDateOfBirth,
                    surname: this.employeeSurname,
                    country: this.employeeCountry
                })
            
                this.employees[this.arrayIndex] = response.data;
                this.clearInputs();
            } catch(err) {
                console.error(err)
            }

           
        },

        closeModal() {
            this.isCloseModal = true;
            this.clearInputs();
        }

    }
}
</script>
<style lang="scss" scoped>
    .container {
        border: 1px solid;
    }
    .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wrapper {
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
    }

    main {
        margin-top: 300px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
    }
</style>