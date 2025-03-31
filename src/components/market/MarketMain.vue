<template>
    <MarketSelect class="category" :products-array="categories" v-model="categoryName" empty-value="Choose category"/>
    <MarketSelect class="price" :products-array="sortedPrice" v-model="priceDirection" />
    <MarketPriceRange @send-input-values="getData"/>
    <MarketCardField :new-arr="getFilteredProducts" :after="priceAfter" :before="priceBefore"/>
</template>
<script>
import MarketSelect from './MarketSelect.vue';
import MarketCardField from './MarketCardField.vue';
import MarketPriceRange from './MarketPriceRange.vue';

export default {
    components: {MarketSelect, MarketCardField, MarketPriceRange},
    name: "MarketMain",
    data() {
        return {
            products:   [
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

            sortedPrice: ["По возрастанию цены", "По убыванию цены"],
            categoryName: "",
            priceDirection: "По возрастанию цены",
            priceBefore: null,
            priceAfter: null
        }
    }, 
    
    methods: {
        getData(data) {
            this.priceBefore = data.first;
            this.priceAfter = data.second;
        }
    },

    computed: {
        getFilteredProducts() {
            let arr = [...this.sortProducts];
            if (this.categoryName.length > 0) {
                arr = arr.filter(item => {
                    return item.category === this.categoryName;
                })
            }
                
            return arr;
        },

        sortProducts() {
            let arr = [... this.products];
            if (this.priceDirection === "По возрастанию цены") {
                arr.sort((a, b)=> {
                    return a.price - b.price;
                })
            } else {
                arr.sort((a, b) => {
                    return b.price - a.price;
                })
            }

            return arr;
        },
        categories(){
           return new Set(this.products.map(item => item.category));
        }
    }
}
</script>
<style lang="scss" scoped>
    .category {
        position: absolute;
        left: 10%;
        top: 5%;
        z-index: 1;
    }

    .price {
        position: absolute;
        right: 10%;
        top: 5%;
        z-index: 1;
    }
</style>