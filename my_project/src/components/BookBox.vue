<template>
 
  

    <div v-for="book of books" :key="book.id">
        <!-- <SingleBook/> -->
        <SingleBook :book="book"/>
    </div>
     
</template>
  
  <script>
  
  import SingleBook from './SingleBook.vue'
  
   
  
  export default {
    name: 'BookBox',
    components:{
      SingleBook
    },
    props: {
        books: Array
    }

  }
  
  
  
  
  </script>
  
  
  <style>
  
  
  </style>