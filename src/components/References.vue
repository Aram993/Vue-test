<template>
    <div class="wrapper">
        <button @click="onToggleBlock">Press me</button>
       <div ref="block" class="block">
            <span style="display: block;">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Алфавит, снова. Ручеек ему назад все что несколько путь пустился но пор моей наш. Текстами семантика приставка даль агентство большого?</span>
            <input ref="inputEl" type="text" placeholder="asdsd">
       </div>
    </div>
</template>

<script>
export default {
    name: 'References',
    data() {
        return {
            isShownBlock: true
        }
    }, methods: {
        onToggleBlock() {
            if(this.isShownBlock) {
                this.$refs.block.style.height = '100px';
                this.$refs.inputEl.focus();
            }else {
                this.$refs.block.style.height = '0';
            }
            
            this.isShownBlock = !this.isShownBlock
            
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    .block {
        height: 0;
        overflow: hidden;
        transition: height .3s linear; 
    }
</style>