<template>
    <div>
        Some Block
        <br>
        <br>
        <button @click="toggleAlert">Show notification</button>
        <hr>
        <hr>
        <AnotherBlock/>
    <Alert type="error" title="Error" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." @close="isAlertOpened = !isAlertOpened" v-if="isAlertOpened"/>
    </div>
</template>
<script>
import Alert from '../Alert.vue';
import AnotherBlock from './AnotherBlock.vue';
import alertMixin from './alertMixin';

export default {
    components: {Alert, AnotherBlock},
    mixins: [alertMixin],
    created() {
        this.task = {
            id: 1,
            isDone: false
        }
    },
    mounted() {
        console.log(this.task)
    }
}
</script>
<style>
    
</style>