<template >
    <Loader :is-loading="isLoading"/>
    <div class="root">
        <div class="container">
            <div class="wrapper">
                <ResumeSideBar 
                :blocks="blocks" 
                :btn-disabled="isBtnDisabled"
                :hide-block="isShownSucessBlock"
                @add-block="addBlock"
                @get-resume="getResume"/>
                <ResumeEditor :blocks="blocks"/>
            </div>
            <button>Press</button>

    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ResumeEditor from './ResumeEditor.vue';
import ResumeSideBar from './ResumeSideBar.vue';
import Loader from '../Loader.vue';

export default {
    name: "Resume",
    components: {ResumeEditor, ResumeSideBar, Loader},
    data() {
        return {
            blocks: [],
            isLoading: false,
            ishidenLoader: true,
            isBtnDisabled: false,
            isShownSucessBlock: false
        }
    }, methods: {
        addBlock(block) {
            let result = {};

            for (let i = 0; i < this.blocks.length; i++) {
                if (block.type === "title") {
                    if (this.blocks[i].type === "title") {
                        this.blocks[i].value = block.value;
                        this.changeResume(this.blocks[i].id, block);
                        break;
                    }
                    continue;
                } else if (block.type === "avatar") {
                    if (this.blocks[i].type === "avatar") {
                        this.blocks[i].value = block.value;
                        this.changeResume(this.blocks[i].id, block);
                        break;
                    }
                    continue;
                } else {
                    result = block;
                }
            }

            if (result === "") {
                return
            }

            this.blocks.push(result);
            this.addInfoToResume(block);
        },

        async getResume() {
            try {
                this.ishidenLoader = false;
                this.isBtnDisabled = true;
                this.isLoading = true;
                const response = await axios.get("http://localhost:3000/resume");
                this.blocks = [...response.data];
            } catch(err) {
                console.error(err)
            } finally {
                this.ishidenLoader = true;
                this.isBtnDisabled = false;
                this.isLoading = false;
            }
        },

        async changeResume(id, element) {
            try {
                this.isShownSucessBlock = true;
                const response = await axios.put(`http://localhost:3000/resume/${id}`, element);
            } catch(err) {
                console.error(err);
            } finally {
                setTimeout(()=>{
                    this.isShownSucessBlock = false;
                }, 2000)
            }
            
        },

        async addInfoToResume(element) {
            try {
            
                const response = await axios.post("http://localhost:3000/resume", element);
                this.isShownSucessBlock = true;
            } catch(err) {
                console.error(err);
            } finally {
                setTimeout(()=>{
                    this.isShownSucessBlock = false;
                }, 2000)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }

    .wrapper {
        display: flex;
        gap: 30px;
        height: max-content;
    }

    .root {
        margin-top: 40px;
    }
    // "https://avatarzo.ru/wp-content/uploads/medved-flag-rossii.jpg"
</style>