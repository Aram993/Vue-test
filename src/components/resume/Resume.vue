<template >
  <div class="root">
    <div class="container">
        <div class="wrapper">
            <ResumeSideBar @add-block="addBlock"/>
            <ResumeEditor :blocks="blocks"/>
        </div>
   </div>
  </div>
</template>
<script>
import ResumeEditor from './ResumeEditor.vue';
import ResumeSideBar from './ResumeSideBar.vue';

export default {
    name: "Resume",
    components: {ResumeEditor, ResumeSideBar},
    data() {
        return {
            blocks: []
        }
    }, methods: {
        addBlock(block) {
            this.blocks.push(block);
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
    }

    .root {
        margin-top: 40px;
    }
</style>