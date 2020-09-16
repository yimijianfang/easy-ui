<template>
  <div>
    <p class="title">tag</p>
    <easy-tag></easy-tag>
  </div>
</template>

<script>
import EasyTag from "@/components/tag"

export default {
  name: 'DemoTag',
  components: {
    EasyTag
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
