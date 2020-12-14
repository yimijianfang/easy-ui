<template>
  <easy-popover v-model="ss" width="200" placement="bottom" trigger="click">
    <input type="text" slot="reference" v-model="labelvalue">
    <caspanel :options="options" :id="id"></caspanel>
  </easy-popover>
</template>
<script>
// import EasyIcon from "../../icon"
import EasyPopover from '@/components/popover'
import Caspanel from "./panel"
import eventBus from "@/utils/event-bus"
export default {
  name: 'easy-cascader',
  components:{
    // EasyIcon
    EasyPopover,
    Caspanel
  },
  props: {
    options:{
      type: Array,
      default: ()=>{
        return []
      }
    },
    value:{
      type: [String, Number, Array]
    },
    props:{
      type: Object,
      default:()=>{
        return {
          expandTrigger: "click",
          multiple: false,
          checkStrictly: false,
          emitPath: true,
          lazy: false,
          lazyLoad: null,
          value: 'value',
          label: 'label',
          children: 'children',
          disabled: 'disabled',
          leaf: 'leaf'
        }
      }
    },
    size:{
      type: String
    },
    placeholder:{
      type: String,
      default: '请输入'
    },
    disabled:{
      type: Boolean,
      default: false
    },
    clearable:{
      type: Boolean,
      default: false
    },
    "show-all-levels":{
      type: Boolean,
      default: true
    },
    "collapse-tags":{
      type: Boolean,
      default: false
    },
    separator:{
      type: String,
      default: '/'
    },
    filterable:{
      type: Boolean,
      default: false
    },
    "filter-method": null,
    debounce:{
      type: Number,
      default: 300
    },
    "before-filter":null,
    "popper-class": String
  },
  data(){
    return {
      labelvalue: '',
      ss: false,
      id: Math.floor(Math.random()*100)
    }
  },
  computed:{
    
  },
  mounted: function(){
    var that = this
    var eventName = 'panelClick:'+that.id
    console.log('监听'+eventName)
    eventBus.$on(eventName, function({label, value, children}){
      if(!children){
        that.$emit('input', value)
        that.labelvalue = label
        that.ss = false
      }
    })
  },
  methods:{
    
  }
}
</script>