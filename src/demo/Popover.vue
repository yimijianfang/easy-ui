<template>
  <div style="margin-bottom:50px">
    <p class="title">popover</p>
    <div>
      <easy-popover title="标题" width="200" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" placement="top" trigger="hover">
        <easy-button slot="reference">
          hover激活
        </easy-button>
      </easy-popover>
      <easy-popover title="标题" width="200" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" placement="top" trigger="click">
        <easy-button slot="reference">
          click激活
        </easy-button>
      </easy-popover>
      <easy-popover title="标题" width="200" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" placement="top" trigger="focus">
        <easy-button slot="reference">
          focus激活
        </easy-button>
      </easy-popover>
      <easy-popover v-model="ss" title="标题" width="200" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" placement="top" trigger="manual">
        <easy-button slot="reference" @click="ss=!ss">
          手动激活
        </easy-button>
      </easy-popover>
    </div>
    <hr>
    <div>
      <easy-popover placement="right" trigger="click">
        <table>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
          </tr>
          <tr>
            <td>刘宁</td>
            <td>11</td>
          </tr>
          <tr>
            <td>刘宁2</td>
            <td>22</td>
          </tr>
          <tr>
            <td>刘宁3</td>
            <td>33</td>
          </tr>
        </table>
        <easy-button slot="reference">
          click 激活
        </easy-button>
      </easy-popover>
    </div>
    <hr>
    <div>
      <easy-popover width="160" placement="top" trigger="manual" v-model="visiable">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <easy-button size="mini" type="text" @click="visiable = false">取消</easy-button >
          <easy-button type="primary" size="mini" @click="visiable = false">确定</easy-button >
        </div>
        <easy-button slot="reference" @click="visiable=true">
          删除
        </easy-button>
      </easy-popover>
    </div>
  </div>
</template>

<script>
import EasyButton from "@/components/button"
import EasyPopover from '@/components/popover'

export default {
  name: 'DemoPopover',
  components: {
    EasyButton,
    EasyPopover
  },
  data(){
    return {
      ss: false,
      visiable: false,
      sss: true
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