<template>
  <div class="easy-input">
    <input type="text">
  </div>
</template>
<script>
export default {
  name: 'easy-input',
  props: {
    type:{
      type: String,
      default: 'text'
    },
    value:{
      type: [String, Number]
    },
    maxlength: Number,
    minlength: Number,
    showWordLimit: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    prefixIcon: String,
    suffixIcon: String,
    rows:{
      type: Number,
      default: 2
    },
    autosize: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator:(value) =>{
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    max: [Number, String],
    min: [Number, String],
    step: [Number, String],
    resize: {
      type: String,
      validator:(value) =>{
        return ['none', 'both', 'horizontal', 'vertical'].indexOf(value) > -1
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    form: String,
    label: String,
    tabindex: String,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  computed:{
    
  },
  methods:{
    
  }
}
</script>