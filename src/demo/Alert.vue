<template>
  <div>
    <p class="title">alert</p>
    <easy-alert title="成功提示的文案" type="success"></easy-alert>
    <easy-alert title="消息提示的文案" type="info"></easy-alert>
    <easy-alert title="警告提示的文案" type="warning"></easy-alert>
    <easy-alert title="错误提示的文案" type="error"></easy-alert>
    <hr>
    <easy-alert title="消息提示的文案" type="info" :closable="false"></easy-alert>
    <easy-alert title="消息提示的文案" type="success" close-text="知道了"></easy-alert>
    <hr>
    <easy-alert title="警告提示的文案" type="warning" show-icon></easy-alert>
    <easy-alert title="错误提示的文案" type="error" show-icon></easy-alert>
    <hr>
    <easy-alert title="警告提示的文案" type="warning" show-icon center></easy-alert>
    <hr>
    <easy-alert title="警告提示的文案" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" show-icon></easy-alert>
    <easy-alert title="警告提示的文案" type="warning" show-icon>
      这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……
    </easy-alert>
  </div>
</template>

<script>
import EasyAlert from "@/components/alert"

export default {
  name: 'DemoAlert',
  components: {
    EasyAlert
  },
  methods:{
    closeAlert(){
      alert('删除')
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 30px;
  background: #ccc;
  border-radius: 10px;
}
</style>
