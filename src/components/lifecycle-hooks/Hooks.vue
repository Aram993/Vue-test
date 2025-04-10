<template>
    <div class="template-class">
        <h1 v-if="isLoading">LAODING</h1>
        <main v-else>
            <div>
                {{ JSON.stringify(posts) }}
            </div>
            <input ref="inputEl" type="text" placeholder="type this input">
        </main>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            posts: [],
            isLoading: true,
            intervalId: null,
        }
    },
    methods: {
        async getPosts() {
            try{
                this.isLoading = true;
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.posts = data;
            }catch(e) {
                console.log(e)
            }finally{
                this.isLoading = false;
            }
        },
        someFunc(e) {
            console.log(e)
        }
    },
    created() {
        console.log('created');
        this.getPosts();
        let counter = 1;
        this.intervalId = setInterval(() => {
            counter++;
            console.log(counter);
        }, 1000)


    },
    mounted() {
        console.log('mounted')
        document.querySelector('body').style.overflow = 'hidden';

        document.querySelector('body').addEventListener('scroll', this.someFunc)
    },
    beforeUnmount() {
        console.log('before unmount')
        document.querySelector('body').style.overflow = '';
        clearInterval(this.intervalId);
        document.querySelector('body').removeEventListener('scroll', this.someFunc)
    }
}
</script>
<style scoped>
    .template-class {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        background: yellow;
        position: absolute;
        top: 0;
        right: 0;
        overflow: scroll;
    }  
</style>