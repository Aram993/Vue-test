<template>
    <div class="container">
       <p v-copy.alert="'Copy this text'">Это очень важный текст, скопируй его!</p>
       <button>Copy this text</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container {
        position: absolute;
        display: flex;
        background-color: #fff;
        gap: 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        border-radius: 10px;

        > button {
           width: max-content; 
           cursor: pointer;
        }
    }
</style>