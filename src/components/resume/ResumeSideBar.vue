<template>
    <div :class="{'sidebar': true, 'sidebar-height': sideBarHeight}">
        <button  v-if="!blocks.length" @click="renderResume" :disabled="btnDisabled">Загрузить резюме</button>
        <div v-else>
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
            <button @click="$emit('saveChanges')">Сохранить</button>
        </div>
        <div :class="{'success-message': true, 'hide': !hideBlock}">
            <span>Успешно</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "ResumeSideBar",
    props: ["blocks", "btnDisabled", "hideBlock"],
    emits: ["addBlock", "getResume", "saveChanges"],
    data() {
        return {
            selectValue: "title",
            textAreaValue: "",
            sideBarHeight: true
        }
    },
    methods: {
        onAddBlock() {
            this.$emit('addBlock', {type: this.selectValue, value: this.textAreaValue});
            this.textAreaValue = '';
        },

        renderResume() {
            this.$emit('getResume');
            this.sideBarHeight = false
        }
    }
}
</script>
<style scoped lang="scss">
    .sidebar {
        padding: 50px;
        border-radius: 10px;
        width: 30%;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 40px;

        > button {
            position: absolute;
            top: 50%;
            left: 27%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }

        > div {

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

        &-height {
            height: 850px;
        }
    }

    .success-message {
        border: 2px solid green;
        position: absolute;
        top: 80%;
        left: 28%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
        color: white;
        width: 353px;
        height: 70px;
    }

    .hide {
        opacity: 0;
    }
  
  
</style>