<template>
    <div :class="{'modal-background': true}" @click="$emit('closeModal')">
        <div class="modal-active" @click.stop>
            <div class="modal-close" @click="$emit('closeModal')">
                <img src="@/assets/images/cross.svg" />
            </div>
            <div class="modal-window">
                <div class="info">Комментарии из поста № {{ postId }}</div>
                <div class="mtop" v-for="(comment, index) in comments" :key="comment.id">
                    <span>Комментарий № {{ index + 1 }}</span>
                    <span>{{ comment.body }}</span>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PostsModal",
    props: ["isShownModal", "comments", "postId"],
    emits: ["closeModal"],

    mounted() {
        document.querySelector("body").style.overflow = "hidden";
        
    },

    beforeUnmount() {
        document.querySelector("body").style.overflow = "auto";
    }
}
</script>
<style lang="scss">
    .modal-background {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        width: 100%;
        height: 100%;
        /* указываем z-индекс для корректного наслаивания */
        z-index: 1;
        cursor: pointer;
    }

    .modal-active {
        position: absolute;
        width: 550px;
        height: 495px;
        overflow: hidden;
        top: calc(50% - 250px);
        left: calc(50% - 175px);
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        cursor: default;
        padding: 40px 20px;
    }

    /* кнопочка закрытия модального окна */
    .modal-close {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* сама картинка кнопочки закрытия */
    .modal-close img {
        margin: -10px;
        width: 50px;
        height: 50px;
    }

    .modal-window {
        position: relative;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;

    }

    .mtop {
        display: flex;
        flex-direction: column;
    }

    .modal-window > .mtop > span {
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: 10px;
        display: block;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
    }

    .info {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        display: block;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: royalblue;
        margin-right: 20px;
    }

    .show-modal {
        display: none;
    }
</style>