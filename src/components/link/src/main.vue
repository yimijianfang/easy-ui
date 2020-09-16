<template>
  <a class="easy-link" :class="linkClass" :href="(!disabled&&href)?href:null" 
    v-bind="$attrs"
    @click="handleClick"
  >
    <i class="fa" :class="icon" v-if="icon"></i>
    <span class="el-link--inner">
      <slot></slot>
    </span>
  </a>
</template>
<script>
export default {
  name: 'easy-link',
  props: {
    type:{
      type: String,
      default: 'default'
    },
    underline:{
      type: Boolean,
      default: true
    },
    disabled:{
      type: Boolean,
      default: false
    },
    href:{
      type: String,
      default: ''
    },
    icon:{
      type: String,
      default: ''
    }
  },
  computed:{
    linkClass: function(){
      let classes = []
      classes.push('easy-link-'+this.type)
      if(this.disabled){
        classes.push('is-disabled')
      }
      if(this.underline && !this.disabled){
        classes.push('is-underline')
      }
      return classes
    }
  },
  methods:{
    handleClick(event){
      if(!this.disabled){
        if(!this.href){
          this.$emit('click', event)
        }
      }
    }
  }
}
</script>