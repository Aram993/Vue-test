<template>
    <div style="border: 1px solid black;">
        <strong>
            {{ title }}
        </strong>
        <hr>
        <br>
        <Child/>
    </div>
</template>
<script>
import Child from './Child.vue';

export default {
    components: {Child},
    name: 'Parent',
    props: ['title']
}
</script>
<style lang="">
    
</style>