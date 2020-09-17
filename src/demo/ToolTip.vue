<template>
  <div style="margin-bottom:50px">
    <p class="title">tool-tip</p>
    <div class="box">
      <div class="top">
        <easy-tool-tip content="上左的提示信息" placement="top-start">
          <easy-button>
            上左
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="上面的提示信息" placement="top">
          <easy-button>
            上面
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="上右的提示信息" placement="top-end">
          <easy-button>
            上右
          </easy-button>
        </easy-tool-tip>
      </div>
      <div class="left">
        <easy-tool-tip content="左上的提示信息" placement="left-start">
          <easy-button>
            左上
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="左边的提示信息" placement="left">
          <easy-button>
            左边
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="左下的提示信息" placement="left-end">
          <easy-button>
            左下
          </easy-button>
        </easy-tool-tip>
      </div>
      <div class="right">
        <easy-tool-tip content="右上的提示信息" placement="right-start">
          <easy-button>
            右上
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="右边的提示信息" placement="right" effect="light">
          <easy-button>
            右边
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="右下的提示信息" placement="right-end">
          <easy-button>
            右下
          </easy-button>
        </easy-tool-tip>
      </div>
      <div class="bottom">
        <easy-tool-tip content="下左的提示信息" placement="bottom-start">
          <easy-button>
            下左
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="下边的提示信息" placement="bottom">
          <easy-button>
            下边
          </easy-button>
        </easy-tool-tip>
        <easy-tool-tip content="下右的提示信息" placement="bottom-end">
          <easy-button>
            下右
          </easy-button>
        </easy-tool-tip>
      </div>
    </div>
    <hr>
    <div>
      <easy-tool-tip content="theme:dark" placement="top">
        <easy-button>
          Dark
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip content="theme:light" placement="bottom" effect="light">
        <easy-button>
          Light
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip content="点击按钮试试" placement="top" v-model="ss" :manual="true">
        <easy-button @click="ss = !ss">
          手动关闭
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip content="theme:dark" placement="top" :hide-after="500">
        <easy-button>
          延迟隐藏
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip content="theme:dark" placement="top" :enterable="false">
        <easy-button>
          不能移入
        </easy-button>
      </easy-tool-tip>
    </div>
    <hr>
    <div>
      <easy-tool-tip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <easy-button>
          Top center
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip placement="right" content="我没有箭头" :visibleArrow="false">
        <easy-button>
          没有箭头
        </easy-button>
      </easy-tool-tip>
      <easy-tool-tip :openDelay="300" placement="top" content="我是提示">
        <easy-button>
          移入延迟显示
        </easy-button>
      </easy-tool-tip>
    </div>
    <hr>
    <div>
      <easy-tool-tip :disabled="toolTipDisabled" placement="top" content="点击关闭tooltip">
        <easy-button @click="toolTipDisabled=!toolTipDisabled">
          {{btnTips}}
        </easy-button>
      </easy-tool-tip>
    </div>
  </div>
</template>

<script>
import EasyButton from "@/components/button"
import EasyToolTip from '@/components/tooltip'

export default {
  name: 'DemoToolTip',
  components: {
    EasyButton,
    EasyToolTip
  },
  data(){
    return {
      toolTipDisabled: false,
      ss: true
    }
  },
  computed:{
    btnTips: function(){
      return this.toolTipDisabled?
              "点击开启tooltip功能":
              "点击关闭tooltip功能"
    }
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
  margin-top: 20px;
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