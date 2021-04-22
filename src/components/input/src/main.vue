<template>
  <div :class="[
    type==='textarea'?'easy-textarea':'easy-input',
    inputSize?'easy-input--'+inputSize:'',
    {
      'is-disabled': inputDisabled,
      'el-input-group': $slots.prepend || $slots.append,
      'el-input-group--append': $slots.append,
      'el-input-group--prepend': $slots.prepend,
      'el-input--prefix': $slots.prefix || prefixIcon,
      'el-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
    }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = true"
  >
    <template v-if="type!='textarea'">
      <div
        class="easy-input-group__prepend"
        v-if="$slots.prepend"
      >
        <slot name="prepend"></slot>
      </div>
      <span
        class="easy-input__prefix"
        v-if="$slots.prefix || prefixIcon"
      >
        <slot name="prefix"></slot>
        <i
          class="easy-input__icon"
          v-if="prefixIcon"
          :class="prefixIcon"
        >
        </i>
      </span>
      <input 
        v-bind="$attrs"
        class="easy-input__inner"
        :type="type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        ref="input"
        :aria-label="label"
        @input="handleInput"
      >
      <span
        class="easy-input__suffix"
        v-if="suffixVisible"
      >
        <slot name="suffix"></slot>
        <span 
          v-if="suffixIcon || showClear || showPwdVisible"
          class="easy-input__suffix-inner"
        >
          <i
            class="easy-input__icon"
            v-if="suffixIcon"
            :class="suffixIcon"
          >
          </i>
          <easy-icon 
            v-if="showClear" 
            name="fa-close" 
            class="easy-input__icon easy-input__clear"
            @click="handleClear"
          ></easy-icon>
          <easy-icon v-if="showPwdVisible" name="fa-eye" class="easy-input__icon easy-input__clear"></easy-icon>
        </span>

        <span
          v-if="isWordLimitVisible"
          class="easy-input__count"
        >
          <span class="easy-input__count-inner">
            {{ textLength }}/{{ upperLimit }}
          </span>
        </span>
      </span>
      <div
        class="easy-input-group__append"
        v-if="$slots.append"
      >
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>
<script>
import EasyIcon from "../../icon"
export default {
  name: 'easy-input',
  inheritAttrs: false,
  components:{
    EasyIcon
  },
  props: {
    type:{
      type: String,
      default: 'text'
    },
    value:{
      type: [String, Number]
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
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
    form: String,
    label: String,
    tabindex: String,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      hovering: false,
      focused: false
    }
  },
  computed:{
    isWordLimitVisible: function(){
      return this.type==='text' && this.showWordLimit
    },
    inputSize: function(){
      return this.size
    },
    upperLimit: function(){
      return this.maxlength
    },
    textLength: function(){
      return this.value.length
    },
    inputDisabled: function(){
      return this.disabled
    },
    nativeInputValue: function(){
      return (this.value === null ||this.value === undefined)
        ? ""
        : String(this.value)
    },
    showClear: function(){
      return this.clearable &&
      !this.inputDisabled &&
      !this.readonly &&
      this.nativeInputValue &&
      (this.focused || this.hovering)
    },
    showPwdVisible: function(){
      return this.showPassword &&
      !this.inputDisabled &&
      !this.readonly &&
      (!!this.nativeInputValue || this.focused)
    },
    suffixVisible: function(){
      return  this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        this.isWordLimitVisible
    },
  },
  methods:{
    handleInput: function(e){
      this.$emit("input", e.target.value)
    },
    handleClear: function(){
      this.$emit("input", "")
      this.$emit("change", "")
      this.$emit("clear")
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    //todo
    setNativeInputValue: function(){
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    }
  },
  mounted: function(){
    console.log(this.$attrs)
  },
  watch:{
    nativeInputValue(){
      this.setNativeInputValue()
    }
  }
}
</script>