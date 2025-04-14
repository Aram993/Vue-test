<template>
    <div>
        Another block
        <br>
        <button @click="toggleAlert">Show Success</button>
        <Alert type="primary" title="Success" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." @close="isAlertOpened = !isAlertOpened" v-if="isAlertOpened"/>
    </div>
</template>
<script>
import Alert from '../Alert.vue';
import alertMixin from './alertMixin';

export default {
    components: {Alert},
    data() {

    },
    computed: {},
    mixins: [alertMixin],
    mounted() {
        console.log(this.task, 'not edited')
    }
}
</script>
<style lang="">
    
</style>