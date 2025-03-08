<template>
    <div class="field">
        <div class="card" v-for="book in books">
            <div id="top" v-on:click="renderStars">{{ book.title }}</div>
            <div>{{ book.author }}</div>
            <div>{{ book.year }} год</div>
            <div id="bottom">
                <img v-bind:src="star" alt="" class="stars">
                <img v-bind:src="star" alt="" class="stars">
                <img v-bind:src="star" alt="" class="stars">
                <img v-bind:src="starWhite" alt="" class="stars">
                <img v-bind:src="starWhite" alt="" class="stars">
            </div>
        </div>
    </div>
</template>
<script>
import star from '@/assets/images/star.png';
import starWhite from '@/assets/images/star-white.png';
export default {
    name: "books",
    data() {
        return {
            books: [
                    { id: 1, title: 'Война и мир', author: 'Лев Толстой', year: 1869, rating: 5 },
                    { id: 2, title: '1984', author: 'Джордж Оруэлл', year: 1949, rating: 4 },
                    { id: 3, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, rating: 5 },
                    { id: 4, title: 'Преступление и наказание', author: 'Федор Достоевский', year: 1866, rating: 4 },
                    { id: 5, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', year: 1997, rating: 3 }
                ],
            star,
            starWhite,
            arr: []
            
        }
    }, methods: {
        renderStars(value) {
            this.arr = [star, star, star, star, star];
            console.log(this.arr);
        }
    }
}
</script>
<style>

    .field {
        position: absolute;
        padding: 20px;
        display: flex;
        top: 45%;
        left: 5%;
        background-color: #fff;
        border-radius: 10px;
        width: 80%;
        height: 500px;
    }

    .card {
        background-color: grey;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 160px;
        margin: 20px;
        border: 2px solid brown;
        border-radius: 10px;
    }

    .card > div {
        padding: 5px;
        color: white;
        border: 1px solid white;
        text-align: center;
    }

    
    #top {
        border-top: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    #bottom {
        border-bottom: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .stars {
        width: 25px;
    }
</style>