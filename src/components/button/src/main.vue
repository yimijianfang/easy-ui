<template>
  <button
    :type="nativeType"
    class="easy-button"
    :autofocus="autofocus"
    :class="[
      'easy-button-'+type,
      size?'easy-button-'+size:'',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    @click="handleClick"
  >
    <i v-if="icon" class="fa" :class="icon"></i>
    <i v-if="loading" class="fa fa-spinner"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'easy-button',
  props: {
    size:{
      type: String,
      default: ''
    },
    type:{
      type: String,
      default: 'default'
    },
    plain:{
      type: Boolean,
      default: false
    },
    round:{
      type: Boolean,
      default: false
    },
    circle:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    },
    icon:{
      type: String,
      default: ''
    },
    autofocus:{
      type: Boolean,
      default: false
    },
    nativeType:{
      type: String,
      default: 'button'
    }
  },
  methods:{
    handleClick(event){
      if(!this.loading && !this.disabled){
        this.$emit('click', event)
      }
    }
  }
}
</script>