<template>
  <header class="head">
    <a href="#img">BOOK WISE</a>
    <a href="#A">A</a>
    <a href="#B">B</a>
    <a href="#C">C</a>
    <a href="#D">D</a>
  </header>
  </template>
  
  <script>
  
  
   
  
  export default {
    name: 'MyHeader',
    props: {
        bookName: String,
        authorName: String
    }
    
  }
  
  
  
  
  </script>
  
  
  <style>
  .head{
    grid-column: 1;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    background-color: #9b9d9f;
    padding:10px;
    height: 100px;
    margin: 0px;
    text-align: center;
  }
  .head a{
    margin: 0 15px;
    font-size: 50px;
    text-decoration: none;
    color: black;
    }
  
  </style>