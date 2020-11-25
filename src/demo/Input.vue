<template>
  <div>
    <p class="title">input</p>
    <div class="box">
      <easy-input></easy-input>
    </div>
    <hr>
  </div>
</template>

<script>
import EasyInput from "@/components/input"

export default {
  name: 'DemoInput',
  components: {
    EasyInput
  },
  data(){
    return {
      
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.easy-input{
  margin-left: 10px;
}
.title{
  font-size: 30px;
  background: #ccc;
  border-radius: 10px;
}
</style>
