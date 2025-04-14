<template>
    <div :class="['alert', type]">
        <div class="alert-title">{{ title }}</div>
        <div class="alert-body">{{ text }}</div>
        <button @click="$emit('close')">Close</button>
    </div>
</template>
<script>
export default {
    props: ['type', 'title', 'text'],
    emits: ['close']
}
</script>
<style lang="scss" scoped>
    .alert {
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        color: white;
    }

    .primary {
        background-color: green;
    }

    .warning {
        background-color: orange;
    }

    .error {
        background-color: red;
    }
</style>