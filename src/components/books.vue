<template>
    <input type="text" placeholder="Введите название или автора книги" v-model="searchValue">
    <div class="buttons">
        <select name="sortedBooks" id="sortedBooks" v-model=selectValue>
            <option value=""></option>
            <option value="nameAsc">По названию: А-Я</option>
            <option value="nameDesc">По названию: Я-А</option>
            <option value="yearAsc">По году издания: Старее</option>
            <option value="yearDesc">По году издания: Новее</option>
            <option value="ratingDesc">По рейтингу: Лучшие</option>
            <option value="ratingAsc">По рейтингу: Худшие</option>
        </select>
    </div>
    <div class="field">
        <h1 v-if="books.length === 0">КНИГИ НЕ НАЙДЕНЫ!</h1>
        <div :class="{'card': true, 'bestBooks': book.rating > 3}" v-for="book in filteredBooks">
            <div id="top">{{ book.title }}</div>
            <div>{{ book.author }}</div>
            <div>{{ book.year }} год</div>
            <div id="bottom" >
                <!-- <i v-bind:class="{'fa': true, 'fa-star': true, 'star-gold': star <= book.rating, 'star-grey': star > book.rating}" v-for="star in 5"></i> -->
                <i :class="['fa', 'fa-star', book.rating >= star ? 'star-gold' : 'star-gray']" v-for="star in 5"></i>
            </div>
        </div>
    </div>

    <button @click="testFunction">Press me</button>
</template>
<script>
import star from '@/assets/images/star.png';
export default {
    name: "books",
    data() {
        return {
            books: [
                    { id: 1, title: 'Война и мир', author: 'Лев Толстой', year: 1869, rating: 5 },
                    { id: 2, title: '1984', author: 'Джордж Оруэлл', year: 1949, rating: 4 },
                    { id: 3, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, rating: 5 },
                    { id: 4, title: 'Преступление и наказание', author: 'Федор Достоевский', year: 1866, rating: 4 },
                    { id: 5, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', year: 1997, rating: 3 },
                    { id: 6, title: 'Евгений Онегин', author: 'Александр Пушкин', year: 1833, rating: 5 },
                    { id: 7, title: 'Герой нашего времени', author: 'Михаил Лермонтов', year: 1840, rating: 4 },
                    { id: 8, title: 'Улисс', author: 'Джеймс Джойс', year: 1922, rating: 3 },
                    { id: 9, title: 'Лолита', author: 'Владимир Набоков', year: 1955, rating: 4 },
                    { id: 10, title: 'Скотный двор', author: 'Джордж Оруэлл', year: 1945, rating: 3 }
                ],
            star,
            searchValue: "",
            selectValue: ""
        }
    }, 
    methods: {
        getArray() {
            return this.books = 
                [
                    { id: 1, title: 'Война и мир', author: 'Лев Толстой', year: 1869, rating: 5 },
                    { id: 2, title: '1984', author: 'Джордж Оруэлл', year: 1949, rating: 4 },
                    { id: 3, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, rating: 5 },
                    { id: 4, title: 'Преступление и наказание', author: 'Федор Достоевский', year: 1866, rating: 4 },
                    { id: 5, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', year: 1997, rating: 3 },
                    { id: 6, title: 'Евгений Онегин', author: 'Александр Пушкин', year: 1833, rating: 5 },
                    { id: 7, title: 'Герой нашего времени', author: 'Михаил Лермонтов', year: 1840, rating: 4 },
                    { id: 8, title: 'Улисс', author: 'Джеймс Джойс', year: 1922, rating: 3 },
                    { id: 9, title: 'Лолита', author: 'Владимир Набоков', year: 1955, rating: 4 },
                    { id: 10, title: 'Скотный двор', author: 'Джордж Оруэлл', year: 1945, rating: 3}
                ]
        },
        testFunction() {
            alert(1)
        },  
        sortBooksByNameAsc(arr) {
            arr.sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }
            })
        },
        sortBooksByNameDesc(arr) {
             arr.sort((a, b) => {
                if (a.title > b.title) {
                    return -1;
                }
                if (a.title < b.title) {
                    return 1;
                }

                return 0;
            })
        },
        sortBooksByYearAsc(arr) {
            arr.sort((a, b) => {
                return a.year - b.year;
            })
        },
        sortBooksByYearDesc(arr) {
            arr.sort((a, b) => {
                return b.year - a.year;
            })
        },
        sortBooksByRatingAsc(arr) {
            arr.sort((a, b) => {
                return a.rating - b.rating;
            })
        },
        sortBooksByRatingDesc(arr) {
            arr.sort((a, b) => {
                return b.rating - a.rating;
            })
        }
    },
    computed: {
        filteredBooks() {
            let result = this.books.filter(item => {
                return item.title.toLowerCase().includes(this.searchValue.toLocaleLowerCase()) || item.author.toLowerCase().includes(this.searchValue.toLocaleLowerCase());
            })

            if (this.selectValue === "nameAsc") {
                this.sortBooksByNameAsc(result)
            } else if (this.selectValue === "nameDesc") {
                this.sortBooksByNameDesc(result)
            } else if (this.selectValue === "yearAsc") {
                this.sortBooksByYearAsc(result)
            } else if (this.selectValue === "yearDesc") {
                this.sortBooksByYearDesc(result)
            } else if (this.selectValue === "ratingAsc") {
                this.sortBooksByRatingAsc(result)
            } else if (this.selectValue === "ratingDesc") {
                this.sortBooksByRatingDesc(result)
            }

            return result;
        }
    }
}
</script>
<style scoped>

    .field {
        position: absolute;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        top: 30%;
        left: 5%;
        background-color: #fff;
        border-radius: 10px;
        width: 80%;
        height: 600px;
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

    .star-gold {
        color: gold;
    }

    .star-grey {
        color: black;
    }

   input {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 65%;
        height: 30px;
   }

   .buttons {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 65%;
        display: flex;
        justify-content: space-between;
    }

    .buttons > button {
        width: 100px;
        cursor: pointer;
    }

    .bestBooks {
        border: 10px solid gold;
    }

</style>