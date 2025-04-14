<template>
    <div :class="{'modal-background': true}" @click="$emit('closeModal')">
        <div class="modal-active" @click.stop>
            <div class="modal-close" @click="$emit('closeModal')">
                <img src="@/assets/images/cross.svg" />
            </div>
            <div class="modal-window">
                <div>{{ time }}</div>
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
    data() {
        return {
            timer: null,
            time: "00-00-00",
            counter: 0,
            minutes: 0,
            seconds: 0,
            hour: 0
        }
    },

    methods: {
        handleKeydown(event) {
            console.log(1);
            if (event.key === "Escape") {
                this.$emit("closeModal");
            }
        }
    },

    mounted() {
        document.querySelector("body").style.overflow = "hidden";
        document.addEventListener('keydown', this.handleKeydown);
        // this.timer = setInterval(()=> {
        //     this.counter++;
        //     let seconds = this.counter
        //     if (seconds < 10) {
        //         this.time = `00-00-0${seconds}`;
        //     } else if (seconds > 9 && seconds < 59) {
        //         this.time = `00-00-${seconds}`;
        //     } else if (seconds > 59 && seconds < 600) {
        //         this.counter = 0;
                
        //         let minutes = this.counter;
        //         this.time = `00-01-0${minutes}`;
        //     }
            
        // }, 500)
    },

    beforeUnmount() {
        document.querySelector("body").style.overflow = "auto";
        document.removeEventListener('keydown', this.handleKeydown);
    }
}
</script>
<style lang="scss" scoped>
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
        max-width: 550px;
        width: 100%;
        height: 495px;
        overflow-y: scroll;
        overflow-x: hidden;
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
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

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