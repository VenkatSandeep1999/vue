<template>
    <div class="topbooks">
        <div class="top" style="background-color: antiquewhite;">BOOKWISE<br> lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, soluta dolores molestias temporibus alias atque sapiente! Officia nostrum delectus, est error asperiores aspernatur voluptatibus nihil beatae facere illum explicabo amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex rem fuga corporis velit mollitia delectus qui voluptates obcaecati vitae. Numquam totam reiciendis explicabo sapiente, officiis atque reprehenderit voluptas ut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, optio! Provident dolores beatae odit asperiores sunt voluptates tempora molestias consequatur, quam culpa, odio laboriosam repellat maxime nihil amet iusto fuga.</div>
    </div>
</template>
<script>

export default {
    name: 'TopBooks',
    props: {
        props: String 
    }
    
  }
  
</script>

<style>
.topbooks{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 20px;
    border-bottom: none;
}
.top{
    font-size: 30px;
}
</style>