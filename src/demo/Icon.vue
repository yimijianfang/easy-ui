<template>
  <div>
    <p class="title">icon</p>
    <easy-icon class="fa-tty"></easy-icon>
    <easy-icon class="fa-address-book"></easy-icon>
    <easy-icon class="fa-bank"></easy-icon>
  </div>
</template>

<script>
import EasyIcon from "@/components/icon"

export default {
  name: 'DemoIcon',
  components: {
    EasyIcon
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
.easy-icon{
  margin-left: 20px;
}
</style>
