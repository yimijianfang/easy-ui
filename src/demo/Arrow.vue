<template>
  <div>
    <p class="title">arrow</p>
    <easy-arrow :width="50" direction="top"></easy-arrow>
    <easy-arrow :width="50" direction="bottom"></easy-arrow>
    <easy-arrow :width="50" direction="left"></easy-arrow>
    <easy-arrow :width="50" direction="right"></easy-arrow>
    <hr>
    <easy-arrow :width="50" direction="top" isSingle></easy-arrow>
    <easy-arrow :width="50" direction="bottom" isSingle></easy-arrow>
    <easy-arrow :width="50" direction="left" isSingle></easy-arrow>
    <easy-arrow :width="50" direction="right" isSingle></easy-arrow>
    <hr>
    <easy-arrow direction="top" color="red"></easy-arrow>
    <easy-arrow direction="top" color="red" isSingle></easy-arrow>
    <easy-arrow direction="top" color="red" isSingle :borderWidth="3"></easy-arrow>
  </div>
</template>

<script>
import EasyArrow from "@/components/arrow"

export default {
  name: 'DemoArrow',
  components: {
    EasyArrow
  },
  methods:{
    
  }
}
</script>

<style scoped>
.title{
  font-size: 30px;
  background: #ccc;
  border-radius: 10px;
}
.easy-arrow{
  margin-left: 20px;
}
</style>
