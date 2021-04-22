<template>
  <div>
    <p class="title">input</p>
    <div class="box">
      <easy-input v-model="input1" placeholder="请输入内容"></easy-input>
      <easy-input v-model="input2" disabled placeholder="请输入内容"></easy-input>
      <easy-input v-model="input3" clearable placeholder="请输入内容"></easy-input>
      <easy-input v-model="input4" clearable placeholder="请输入内容"></easy-input>
      <easy-input placeholder="请输入密码" v-model="input5" show-password></easy-input>
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
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:'',
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
