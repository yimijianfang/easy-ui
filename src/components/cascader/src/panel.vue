<template>
  <span>
    <ul v-if="options && options.length">
      <li 
        v-for="option in options"
        :key="option.value"
        @click="handleClick(option)"
      >{{option.label}}</li>
    </ul>
    <Caspanel v-if="sublist && sublist.length" :id="id" :options="sublist"></Caspanel>
  </span>
</template>
<script>
import eventBus from "@/utils/event-bus"
export default {
  name: 'Caspanel',
  props: {
    options:{
      type: Array,
      default: ()=>{
        return []
      }
    },
    id: [String, Number]
  },
  data(){
    return {
      sublist: []
    }
  },
  computed:{
    
  },
  methods:{
    handleClick(item){
      this.sublist = this.options.find((i)=>{
        return i.value == item.value
      }).children
      console.log(111)
      var eventName = 'panelClick:'+this.id;
      console.log('触发'+eventName);
      eventBus.$emit(eventName, item)
    }
  },
  watch:{
    options: function(){
      this.sublist = []
    }
  }
}
</script>