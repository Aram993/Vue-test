<template>
   <div>
    <ul>
        <li @click="taskArray.splice(idx, 1)" v-for="(item,idx) in taskArray" :key="item">
            <span>{{ item }}</span>
            <input type="text" @click.stop>
        </li>
    </ul>
   </div>
</template>


<script>
import { convertDate } from '@/utils/converter.js';
import crossIcon from '@/assets/images/cross.svg';
  export default {
      name: 'TestFor',
      data() {
          return {
              taskArray: [1, 2, 3, 4, 5]
          }
      },
  }
</script>
