<template>
    <PostsModal v-if="isShownModal"
    :comments="commentsArray"
    :post-id="postId"
    @close-modal="closeModal"/>
    <Loader :is-loading="isLoading"/>
    <div class="container">
       <div class="wrapper">
            <PostsCard v-for="post in postsArray" :key="post.id" 
            :post-title="post.title" 
            :post-body="post.body"
            @choose-card="chooseCard(post.id)"/>
       </div>
       
    </div>
</template>
<script>
import axios from 'axios';
import PostsCard from './PostsCard.vue';
import Loader from '../Loader.vue';
import PostsModal from './PostsModal.vue';

export default {
    name: "postsMain",
    components: {PostsCard, Loader, PostsModal},
    data() {
        return {
            postsArray: [],
            isLoading: false,
            isShownModal: false,
            commentsArray: [],
            postId: null
        }
    }, 
    
    methods: {
        async getPosts() {
            try {
                this.isLoading = true;
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                this.postsArray.push(...response.data);
            } catch(err) {
                console.error(err)
            } finally {
                this.isLoading = false;
            }
        },

        closeModal() {
            this.isShownModal = false;
            this.commentsArray = [];
        },

        handleKeydown(event) {
            if (event.key === "Escape") {
                this.isShownModal = false;
            }
        },

        async chooseCard(id) {
            try {
                this.isShownModal = true;
                this.isLoading = true;
                this.postId = id
                const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
                this.commentsArray.push(...response.data);
            } catch(err) {
                console.error(err)
            } finally {
                this.isLoading = false;
            }
            
        }
    },

    created() {
        this.getPosts();
    },

    mounted() {
        document.addEventListener('keydown', this.handleKeydown);
    }
}
</script>
<style lang="scss">
    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        flex-wrap: wrap;
    }
</style>