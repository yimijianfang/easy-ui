<template>
  <div id="app">
    <p class="title">easy-ui</p>
    <demo-alert></demo-alert>
    <demo-icon></demo-icon>
    <demo-link></demo-link>
    <demo-tag></demo-tag>
    <demo-button></demo-button>
    <demo-arrow></demo-arrow>
    <demo-tool-tip></demo-tool-tip>
    <demo-popover></demo-popover>
    <demo-pop-confirm></demo-pop-confirm>
    <demo-input></demo-input>
    <demo-cascader></demo-cascader>
    <!-- <vue-popper>
      <easy-button>
        默认按钮
      </easy-button>
    </vue-popper> -->
  </div>
</template>

<script>
import DemoAlert from "@/demo/Alert"
import DemoIcon from "@/demo/Icon"
import DemoLink from "@/demo/Link"
import DemoTag from "@/demo/Tag"
import DemoButton from "@/demo/Button"
import DemoToolTip from "@/demo/ToolTip"
import DemoPopover from "@/demo/Popover"
import DemoPopConfirm from "@/demo/PopConfirm"
import DemoArrow from "@/demo/Arrow"
import DemoInput from "@/demo/Input"
import DemoCascader from "@/demo/Cascader"
// import VuePopper from "@/components/popper/src/main"
// import EasyButton from "@/components/button"

export default {
  name: 'App',
  components: {
    DemoAlert,
    DemoIcon,
    DemoLink,
    DemoTag,
    DemoButton,
    DemoToolTip,
    DemoArrow,
    DemoPopover,
    DemoPopConfirm,
    DemoInput,
    DemoCascader
    // VuePopper,
    // EasyButton
  },
  methods:{
    closeAlert(){
      alert('删除')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  font-size: 50px;
}
</style>
