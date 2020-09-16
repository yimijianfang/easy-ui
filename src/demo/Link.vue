<template>
  <div>
    <p class="title">link</p>
    <easy-link href="http://www.baidu.com">默认链接</easy-link>
    <easy-link type="primary">主要链接</easy-link>
    <easy-link type="success">成功链接</easy-link>
    <easy-link type="warning">警告链接</easy-link>
    <easy-link type="danger">危险链接</easy-link>
    <easy-link type="info">信息链接</easy-link>
    <hr>
    <easy-link type="danger" disabled>危险链接</easy-link>
    <easy-link type="info" disabled>信息链接</easy-link>
    <hr>
    <easy-link type="primary" :underline="false">无下划线</easy-link>
    <easy-link type="primary" >有下划线</easy-link>
    <hr>
    <easy-link icon="fa-edit">编辑</easy-link>
    <easy-link>查看<i class="fa fa-eye easy-icon-right"></i></easy-link>
  </div>
</template>

<script>
import EasyLink from "@/components/link"

export default {
  name: 'DemoLink',
  components: {
    EasyLink
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
.easy-link{
  margin-left: 20px;
}
</style>
