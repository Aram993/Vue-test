<template>
    <div>
        {{ JSON.stringify(todoList) }}
    </div>
</template>
<script>
export default {
    name: 'Child',
    inject: ['todoList']
}
</script>
<style lang="">
    
</style>