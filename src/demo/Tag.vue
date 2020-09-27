<template>
  <div>
    <p class="title">tag</p>
    <div class="box">
      <easy-tag>标签一</easy-tag>
      <easy-tag type="success">标签二</easy-tag>
      <easy-tag type="info">标签三</easy-tag>
      <easy-tag type="warning">标签四</easy-tag>
      <easy-tag type="danger">标签五</easy-tag>
    </div>
    <hr>
    <div class="box">
      <easy-tag effect="dark">标签一</easy-tag>
      <easy-tag effect="dark" type="success">标签二</easy-tag>
      <easy-tag effect="dark" type="info">标签三</easy-tag>
      <easy-tag effect="dark" type="warning">标签四</easy-tag>
      <easy-tag effect="dark" type="danger">标签五</easy-tag>
    </div>
    <hr>
    <div class="box">
      <easy-tag effect="plain">标签一</easy-tag>
      <easy-tag effect="plain" type="success">标签二</easy-tag>
      <easy-tag effect="plain" type="info">标签三</easy-tag>
      <easy-tag effect="plain" type="warning">标签四</easy-tag>
      <easy-tag effect="plain" type="danger">标签五</easy-tag>
    </div>
    <hr>
    <div class="box">
      <easy-tag closable>默认标签</easy-tag>
      <easy-tag closable size="medium">中等标签</easy-tag>
      <easy-tag closable size="small">小型标签</easy-tag>
      <easy-tag closable size="mini">超小标签</easy-tag>
    </div>
    <hr>
    <div class="box">
      <easy-tag closable>标签一</easy-tag>
      <easy-tag closable type="success">标签二</easy-tag>
      <easy-tag closable type="info">标签三</easy-tag>
      <easy-tag closable type="warning">标签四</easy-tag>
      <easy-tag closable type="danger">标签五</easy-tag>
    </div>
    <hr>
    <div class="box">
      <easy-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disableTransitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </easy-tag>
    </div>
  </div>
</template>

<script>
import EasyTag from "@/components/tag"

export default {
  name: 'DemoTag',
  components: {
    EasyTag
  },
  data(){
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
    }
  },
  methods:{
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  }
}
</script>

<style scoped>
.easy-tag{
  margin-left: 10px;
}
.title{
  font-size: 30px;
  background: #ccc;
  border-radius: 10px;
}
</style>
