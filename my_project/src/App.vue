<template>


  <!-- Step 3: use the component -->

  <MyHeader/>
  <TopBooks/>
  <BookBox :books="books"/>
  <div class="tips">
    <h1>TIPS</h1><br>
    <p>1. Start Small & Be Consistent</p>
    <p>2. Pick Books That Genuinely Interest You</p>
    <p>3. Set a Reading Goal</p>
    <p>4. Eliminate Distractions</p>
    <p>5. Engage with the Book</p>


  </div>
</template>

<script>

// Step 1 import the componenet
import MyHeader from './components/MyHeader.vue'
import BookBox from './components/BookBox.vue'
import TopBooks from './components/TopBooks.vue'
export default {
  name: 'App',
//Step 2 register the component
  components:{
    MyHeader,
    TopBooks,
    BookBox,
  },

  data(){
  return {
    books: []
  }
  },
  
  methods: {
     async fetchbook(){
      const res = await fetch("https://project-1-624w.onrender.com/api")
      const data = await res.json()
      console.log(data)
      return data
     }

  },
  async created(){
    this.books = await this.fetchbook()
  },

}
  






</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}
.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div{
  margin-bottom: 0.5em;
  text-align: center;
}
.tips{
  background-color: rgb(171, 221, 210);
}
p{
  font-size: 30px
}


</style>
