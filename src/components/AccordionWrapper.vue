<template>
    <div style="width: 40%;">
        <h1>Пользователь открыл счетчик: {{ count }}</h1>
        <Accordion 
            :key="item.id"
            :item-title="item.title" 
            :itemText="item.text" 
            :id="item.id" 
            @change-count="incrementCount" 
            @on-delete="onDeleteItem" 
            v-for="item in faqItems"
        />
    </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue';

export default {
    name: 'AccordionWrapper',
    components: {Accordion},
    data() {
        return {
            faqItems: [
                {id: 1, title: 'Title 1', text: '1) Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. До своих рукопись не речью курсивных составитель они, переписывается решила языком страна рекламных страну но коварный парадигматическая возвращайся ipsum! Маленькая?'},
                {id: 2, title: 'Title 2', text: '2) Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. До своих рукопись не речью курсивных составитель они, переписывается решила языком страна рекламных страну но коварный парадигматическая возвращайся ipsum! Маленькая?'},
                {id: 3, title: 'Title 3', text: '3) Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. До своих рукопись не речью курсивных составитель они, переписывается решила языком страна рекламных страну но коварный парадигматическая возвращайся ipsum! Маленькая?'},
            ],
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        },
        onDeleteItem(id) {
            this.faqItems = this.faqItems.filter(item => item.id !== id);
        }
    }
}
</script>