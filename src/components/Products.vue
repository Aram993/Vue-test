<template>
    <select name="category" id="category" v-model="categoryValue">
        <option value="">Выберите категорию</option>
        <option :value="category" v-for="category in categoryProducts" :key="category">{{ category }}</option>
    </select>
    <select name="price" id="price" v-model="priceValue">
        <option value="priceAsc">По возрастанию цены</option>
        <option value="priceDesc">По убыванию цены</option>
    </select>
    <div id="priceRange">
        <span>Диапазон цены</span>
        <div>
            <label for="priceBefore">ОТ:</label>
            <input type="number" id="priceBefore" v-model="priceBefore">
            <label for="priceAfter">ДО:</label>
            <input type="number" id="priceAfter" v-model="priceAfter">
        </div>
    </div>
    <main>
        <div :class="{'card': true, 'range': getProductsInRange(product)}" v-for="product in filteredProducts" :key="product.id">
            <img src="https://placehold.co/150x100" alt="product">
            <div class="info">{{ product.name }}</div>
            <div class="info">{{ (product.isAvailable) ? product.price + " рублей" :"Нет в наличии" }}</div>
        </div>
    </main>
</template>
<script>
    export default {
        name: "Products",
        data() {
            return {
                products: [
                            { id: 1, name: 'Ноутбук', category: 'Электроника', price: 50000, isAvailable: true },
                            { id: 2, name: 'Футболка', category: 'Одежда', price: 1500, isAvailable: true },
                            { id: 3, name: 'Наушники', category: 'Электроника', price: 3000, isAvailable: false },
                            { id: 4, name: 'Книга', category: 'Книги', price: 500, isAvailable: true },
                            { id: 5, name: 'Смартфон', category: 'Электроника', price: 30000, isAvailable: true },
                            { id: 6, name: 'Планшет', category: 'Электроника', price: 20000, isAvailable: true },
                            { id: 7, name: 'Шорты', category: 'Одежда', price: 2000, isAvailable: false },
                            { id: 8, name: 'Роман', category: 'Книги', price: 800, isAvailable: true },
                            { id: 9, name: 'Телевизор', category: 'Электроника', price: 40000, isAvailable: true },
                            { id: 10, name: 'Кроссовки', category: 'Обувь', price: 4000, isAvailable: false },
                            { id: 11, name: 'Сумка', category: 'Аксессуары', price: 2500, isAvailable: true },
                            { id: 12, name: 'Фитнес-трекер', category: 'Электроника', price: 6000, isAvailable: true },
                        ],
        
                categoryValue: "",

                priceValue: "priceAsc",

                priceBefore: null,

                priceAfter: null

            }
        }, methods: {

            getCategory(arr, value) {
                if(!value) {
                    return arr;
                }

                return arr.filter(item => {
                    return item.category === value;
                })
            },

            sortProductsAsc(arr, direction) {
                if(direction === 'priceAsc') {
                    return arr.sort((a, b) => {
                    return a.price - b.price;
                     })
                }else {
                    return arr.sort((a, b) => {
                    return b.price - a.price;
                    })
                }
                
            },

            getProductsInRange(item) {
                return item.price >= this.priceBefore && item.price <= this.priceAfter && item.isAvailable;
            }

        }, computed: {

            categoryProducts() {
                return new Set(this.products.map(item => item.category));
            },
            filteredProducts() {
                let productsArray = [...this.products];
                productsArray = this.getCategory(productsArray, (this.categoryValue));
                this.sortProductsAsc(productsArray, this.priceValue);

                return productsArray;
            }
        }
    } 
</script>
<style>

    #category {
        position: absolute;
        left: 10%;
        top: 5%;
        z-index: 1;
    }

    #price {
        position: absolute;
        right: 10%;
        top: 5%;
        z-index: 1;
    }

    #priceRange {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, -50%);
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px;
    }

    #priceRange > div {
        display: flex;
        gap: 10px;
    }

    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        width: 80%;
        height: max-content;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        margin: 30px;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 5px grey;
    }

    .card > div {
        border: 1px solid grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px;
        color: darkolivegreen;
        font-weight: bolder;
    }

    .card > img{
        margin: 20px;
    }

    .card:hover {
        box-shadow: 10px 10px 10px grey;
        cursor: pointer;
    }

    .range {
        border: 6px solid red;
        margin: 20px;
    }
</style>