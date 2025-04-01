<template>
    <div class="sidebar">
        <div>
            <h1>Тип блока</h1>
            <select v-model="selectValue">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="text">Текст</option>
                <option value="avatar">Аватар</option>
            </select>
        </div>
       <textarea placeholder="Введите текст..." v-model="textAreaValue"></textarea>
       <button @click="onAddBlock">Добавить</button>
    </div>
</template>
<script>
export default {
    name: "ResumeSideBar",
    emits: ["addBlock"],
    data() {
        return {
            selectValue: "title",
            textAreaValue: ""
        }
    },
    methods: {
        onAddBlock() {
            this.$emit('addBlock', {type: this.selectValue, value: this.textAreaValue});
            this.textAreaValue = '';
        }
    }
}
</script>
<style scoped lang="scss">
    .sidebar {
        padding: 50px;
        border-radius: 10px;
        width: 30%;
        height: 850px;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 40px;

        > div {

            > h1 {
                font-weight: bolder;
                margin-bottom: 10px;
            }

            > select {
                width: 100%;
                background-color: #eee;
                outline: none;
                cursor: pointer;

                > option {
                    cursor: pointer;
                }
            }
        }

        > textarea {
            height: 80px;
            resize: none;
            background-color: #eee;
            outline: none;
        }

        > button {
            cursor: pointer;
        }
    }
  
  
</style>