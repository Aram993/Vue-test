<template>
        <div class="container">
            <h1>{{ newsTitle }}</h1>
            <div class="buttons">
                <button @click="showInfoBlock" v-if="skip" class="btns">Открыть</button>
                <button @click="skipInfoBlock" v-else class="btns">Закрыть</button>
                <button :class="{'noRead': true, 'skipBtn': skipNoRead}" @click="skipNoRead = true, $emit('decrementRead')">Отметить непрочитанной</button>
            </div>
            <div :class="{'info': true, 'skipInfo': skip}" ref="skipInfo">
                <span>{{ newsDescription }}</span>
                <div class="buttons">
                    <button :class="{'readNews': true, 'skipBtn': !skipNoRead}" @click="skipInfoBlockAndIncrementRead">Прочесть новость</button>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: 'News',
        props: ['newsTitle', 'newsDescription'],
        emits: ['incrementOpen', 'decrementOpen', 'incrementRead', 'decrementRead'],
        data() {
            return {
                skip: true,
                skipNoRead: true
            }
        }, methods: {
            showInfoBlock() {
                this.$refs.skipInfo.style.height = this.$refs.skipInfo.scrollHeight + 39 + 'px';
                this.$refs.skipInfo.style.borderTopWidth = "2px";
                this.$refs.skipInfo.style.borderTopColor = "grey";
                this.$refs.skipInfo.style.borderTopStyle = "solid";
                this.skip = false;
                this.$emit('incrementOpen');
            },
            skipInfoBlock() {
                this.$refs.skipInfo.style.height = '0';
                this.$refs.skipInfo.style.border = "none";
                this.skip = true;
            },
            skipInfoBlockAndIncrementRead() {
                this.$refs.skipInfo.style.height = '0';
                this.$refs.skipInfo.style.border = "none";
                this.skip = true;
                this.$emit('incrementRead');
                this.skipNoRead = false;
            }
        }
    }
</script>
<style scoped>

    .container {
        background-color: #fff;
        width: 40%;
        margin: 30px auto;
        border-radius: 10px;
        padding: 30px 30px 15px;
        box-shadow: 10px 10px 10px 10px;
    }

    .container > h1 {
        margin-bottom: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: xx-large;
        font-weight: bolder;
    }

    .btns {
        width: 110px;
        height: 39px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid green;
        color: green;
        background-color: #fff;
        cursor: pointer;
    }

    .btns:hover {
        background-color: green;
        color: #fff;
        transition: all 0.5s ease;
    }

    .info {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        margin-top: 20px;
        /* border-top: 2px solid grey; */
        /* padding: 0 20px; */
        height: 0;
        overflow: hidden;
        transition: all 0.5s ease;
    }

    .info > span {
        display: block;
        margin-top: 20px;
    }

    .buttons {
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
    }

    .buttons > button {
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;;
    }

    .readNews {
        background-color: green;
        color: #fff;
        border: 2px solid white;
    }

    .readNews:hover {
        background-color: white;
        color: green;
        transition: all 0.5s ease;
        border: 2px solid green;
    }

    .noRead {
        background-color: orangered;
        color: #fff;
        border: 2px solid orangered;
    }

    .noRead:hover {
        background-color: white;
        color: orangered;
        transition: all 0.5s ease;
        border: 1px solid orangered;
    }

    .info > span {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: larger;
        font-style: italic;
    }

    .skipBtn {
        display: none;
    }
</style>