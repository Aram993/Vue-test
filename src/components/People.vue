<template>
    <div>
        <input v-model="personName" type="text" placeholder="type person name">
        <br>
        <button :disabled="!personName.length || isLoading" @click="addPerson">Add person to database</button>
        <div>
            <Loader v-if="isLoading"/>
        </div>
    </div>
    <hr>
    <br>
    <div>
        <div v-if="!people.length">No person here</div>
        <ul v-else>
            <li v-for="item in people" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
import Loader from './Loader.vue';

export default {
    name: 'People',
    components: {Loader},
    data() {
        return {
            personName: '',
            people: [],
            isLoading: false
        }
    },  
    methods: {
        // async addPerson() {
        //     try{
        //         const response = await fetch('http://localhost:4000/people', {
        //             method: 'POST',
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({name: this.personName})
        //         })

        //         if(response.ok) {
        //             const data = await response.json();
        //             this.people.push(data);
        //             this.personName = '';
        //         }
        //     }catch(e) {
        //         console.log(e);
        //     }
        // }
        async addPerson() {
            try{
                this.isLoading = true;
               const {data} = await axios.post('http://localhost:4000/people', {name: this.personName});
               this.people.push(data);
               this.personName = '';
            }catch(e) {
                console.log(e);
            }finally{
                this.isLoading = false;
            }
        }
    }
}
</script>
<style lang="">
    
</style>