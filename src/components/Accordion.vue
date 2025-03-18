<template>
    <div class="wrapper">
        <div class="acc" @click="toggleEl">
            <span>{{itemTitle}}</span>
            <div class="line-1"></div>
            <div class="line-2"></div>
            <button @click.stop="$emit('onDelete', id)">Delete</button>
        </div>
        <p class="info" ref="infoDiv">{{ itemText }}</p>   
    </div>
</template>
<script>
    export default {
        name: "Accordion",
        props: ['itemTitle', 'itemText', 'id'],
        emits: ['changeCount', 'onDelete'],
        data() {
            return {
                toggleValue: false,
            }
        }, methods: {
            toggleEl() {
                this.toggleValue = !this.toggleValue;
                this.$emit('changeCount');

                if (this.toggleValue) {
                    this.$refs.infoDiv.style.display = 'block';
                    const elementHeight = this.$refs.infoDiv.scrollHeight;
                    this.$refs.infoDiv.style.height = elementHeight + 'px';
                } else {
                    this.$refs.infoDiv.style.display = 'none';
                    this.$refs.infoDiv.style.height = '0';
                }
            }
        }
    }
</script>
<style scoped>

     .wrap {
        width: 40%;
    }

    .acc {
        position: relative;
        border: 2px solid black;
        padding: 20px;
        height: 60px;
        width: 100%;
        background-color: #eee;
    }

    .acc:hover {
        cursor: pointer;
        background-color: #ccc;
        color: white;
    }

    .info {
        height: 0;
        display: none;
        padding: 20px;
        overflow: hidden;
        max-width: 100%;
        margin:auto;
        background-color: #fff;
        border-top: none;
    }

    .line-1 {
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateX(45%);
        width: 20px;
        border: 1px solid black;
        
    }

    .line-2 {
        position: absolute;
        top: 15%;
        right: 10%;
        transform: translateY(55%);
        height: 20px;
        border: 1px solid black;
    }

</style>