<template>
  <div>
    <p class="title">button</p>
    <easy-button>默认按钮</easy-button>
    <easy-button type="primary">主要按钮</easy-button>
    <easy-button type="success">成功按钮</easy-button>
    <easy-button type="info">信息按钮</easy-button>
    <easy-button type="warning">警告按钮</easy-button>
    <easy-button type="danger">危险按钮</easy-button>
    <hr>
    <easy-button plain>朴素按钮</easy-button>
    <easy-button type="primary" plain>主要按钮</easy-button>
    <easy-button type="success" plain>成功按钮</easy-button>
    <easy-button type="info" plain>信息按钮</easy-button>
    <easy-button type="warning" plain>警告按钮</easy-button>
    <easy-button type="danger" plain>危险按钮</easy-button>
    <hr>
    <easy-button round>朴素按钮</easy-button>
    <easy-button type="primary" round>主要按钮</easy-button>
    <easy-button type="success" round>成功按钮</easy-button>
    <easy-button type="info" round>信息按钮</easy-button>
    <easy-button type="warning" round>警告按钮</easy-button>
    <easy-button type="danger" round>危险按钮</easy-button>
    <hr>
    <easy-button icon="fa-hotel" circle></easy-button>
    <easy-button type="primary" icon="fa-history" circle></easy-button>
    <easy-button type="success" icon="fa-image" circle></easy-button>
    <easy-button type="info" icon="fa-magic" circle></easy-button>
    <easy-button type="warning" icon="fa-life-ring" circle></easy-button>
    <easy-button type="danger" icon="fa-magnet" circle></easy-button>
    <hr>
    <easy-button disabled>默认按钮</easy-button>
    <easy-button type="primary" disabled>主要按钮</easy-button>
    <easy-button type="success" disabled>成功按钮</easy-button>
    <easy-button type="info" disabled>信息按钮</easy-button>
    <easy-button type="warning" disabled>警告按钮</easy-button>
    <easy-button type="danger" disabled>危险按钮</easy-button>
    <hr>
    <easy-button disabled plain>默认按钮</easy-button>
    <easy-button type="primary" disabled plain>主要按钮</easy-button>
    <easy-button type="success" disabled plain>成功按钮</easy-button>
    <easy-button type="info" disabled plain>信息按钮</easy-button>
    <easy-button type="warning" disabled plain>警告按钮</easy-button>
    <easy-button type="danger" disabled plain>危险按钮</easy-button>
    <hr>
    <easy-button type="text">文字按钮</easy-button>
    <easy-button type="text" disabled>文字按钮</easy-button>
    <hr>
    <easy-button type="primary" icon="fa-hotel"></easy-button>
    <easy-button type="primary" icon="fa-history"></easy-button>
    <easy-button type="primary" icon="fa-image"></easy-button>
    <easy-button type="primary" icon="fa-search">搜索</easy-button>
    <easy-button type="primary">上传<i class="fa fa-upload easy-icon-right"></i></easy-button>
    <hr>
    <easy-button>默认按钮</easy-button>
    <easy-button size="medium">中等按钮</easy-button>
    <easy-button size="small">小型按钮</easy-button>
    <easy-button size="mini">超小按钮</easy-button>
    <hr>
    <easy-button round>默认按钮</easy-button>
    <easy-button size="medium" round>中等按钮</easy-button>
    <easy-button size="small" round>小型按钮</easy-button>
    <easy-button size="mini" round>超小按钮</easy-button>
    <hr>
    <easy-button type="primary" :loading="isLoading">加载中</easy-button>
    <hr>
    <easy-button-group>
      <easy-button type="primary" icon="fa-angle-left">上一页</easy-button>
      <easy-button type="primary" icon="fa-angle-right">下一页</easy-button>
    </easy-button-group>
    
    <easy-button-group>
      <easy-button type="primary" icon="fa-edit"></easy-button>
      <easy-button type="primary" icon="fa-eye"></easy-button>
      <easy-button type="primary" icon="fa-trash"></easy-button>
    </easy-button-group>
  </div>
</template>

<script>
import EasyButton from "@/components/button"
import EasyButtonGroup from "@/components/button-group"

export default {
  name: 'DemoButton',
  data(){
    return {
      isLoading: true
    }
  },
  components: {
    EasyButton,
    EasyButtonGroup
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
.easy-button{
  margin-left: 20px;
}
.easy-button-group{
  margin-left: 20px;
}
.easy-button-group .easy-button{
  margin-left: 0;
}
</style>
