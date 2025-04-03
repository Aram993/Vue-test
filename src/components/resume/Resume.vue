<template >
    <Loader :hide-loader="ishidenLoader"/>
    <div class="root">
        <div class="container">
            <div class="wrapper">
                <ResumeSideBar 
                :blocks="blocks" 
                :btn-disabled="isBtnDisabled"
                :hide-block="isShownSucessBlock"
                @add-block="addBlock"
                @get-resume="getResume"
                @save-changes="saveChanges"/>
                <ResumeEditor :blocks="blocks"/>
            </div>
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
            ishidenLoader: true,
            isBtnDisabled: false,
            isShownSucessBlock: false
        }
    }, methods: {
        addBlock(block) {
            let result = "";

            for (let i = 0; i < this.blocks.length; i++) {
                if (block.type === "title") {
                    if (this.blocks[i].type === "title") {
                        this.blocks[i].value = block.value;
                        break;
                    }
                    continue;
                } else if (block.type === "avatar") {
                    if (this.blocks[i].type === "avatar") {
                        this.blocks[i].value = block.value;
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
        },

        async getResume() {
            try {
                this.ishidenLoader = false;
                this.isBtnDisabled = true;
                const response = await axios.get("http://localhost:3000/resume");
                this.blocks = [...response.data];
            } catch(err) {
                console.error(err)
            } finally {
                this.ishidenLoader = true;
                this.isBtnDisabled = false;
            }
        },

        saveChanges() {
            this.isShownSucessBlock = true;
            this.blocks.forEach(item => {
                if (item.type === "title" || item.type === "avatar") {
                    this.changeResume(item.id, item);
                } else {
                    this.addInfoToResume(item);
                }
            })
            setTimeout(()=>{
                this.isShownSucessBlock = false;
            }, 3000)
        },

        async changeResume(id, element) {
            try {
                const response = await axios.put(`http://localhost:3000/resume/${id}`, element);
            } catch(err) {
                console.error(err);
            }
            
        },

        async addInfoToResume(element) {
            try {
                const response = await axios.post("http://localhost:3000/resume", element);
            } catch(err) {
                console.error(err);
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