<template>
 
    <div>
        <h2>{{ book.title }}</h2>
        <h3>by {{ book.author }}</h3>
        <p>Published: {{ book.publication_date }}</p>
        <p>Genre: {{ book.genre }}</p>
        <p>Pages: {{ book.page_count }}</p>
        <p>Rating: {{ book.average_rating }} </p>
        <p>Publisher: {{ book.publisher }}</p>
        <p>Description: {{ book.description }}</p>
        <img :src="book.cover_image" :alt="book.title + ' cover'" style="max-width: 300px;">
        <p>ISBN: {{ book.isbn }}</p>
        <p>Average Rating: {{ book.average_rating }}</p>
    </div>


     
</template>
  
  <script>
  
  
   
  
  export default {
    name: 'SingleBook',
    props: {
        book:Array
    }

  }
  
  
  
  
  </script>
  
  
  <style scoped>

  .green{
      background-color: green;
  }
  
  h4{
      margin: 2px;
  }
  
  div{
      background-color: #b6b2b0;
      color: black;
      text-align: center;
      width: 100%;
      margin: auto;
      font-size: 30px;
  }
  
  .red{
  background-color: orangered !important;
  
  }
  
  
  </style>