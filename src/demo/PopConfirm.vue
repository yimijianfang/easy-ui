<template>
  <div style="margin-bottom:50px">
    <p class="title">popconfirm</p>
    <div>
      <easy-popconfirm placement="bottom" title="这是一段内容确定删除吗？" trigger="click" v-model="visiable">
        <easy-button slot="reference">
          删除
        </easy-button>
      </easy-popconfirm>
    </div>
    <hr>
    <div>
      <easy-popconfirm placement="right" iconColor="red" title="这是一段内容确定删除吗？" confirmButtonText='好的' cancelButtonText='不用了' v-model="visiable2">
        <easy-button slot="reference">
          删除
        </easy-button>
      </easy-popconfirm>
    </div>
    <div style="height:800px"></div>
  </div>
</template>

<script>
import EasyButton from "@/components/button"
import EasyPopconfirm from '@/components/popconfirm'

export default {
  name: 'DemoPopConfirm',
  components: {
    EasyButton,
    EasyPopconfirm
  },
  data(){
    return {
      visiable: false,
      visiable2: false,
    }
  },
  computed:{
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
.easy-button{
  margin-left: 20px;
}
.box{
  width: 400px;
  margin: 0 auto;
}
.top{

}
.left{
  float: left;
  width: 60px;
}
.right{
  float: right;
  width: 60px;
}
.bottom{
  clear: both;
  text-align: center;
}
</style>