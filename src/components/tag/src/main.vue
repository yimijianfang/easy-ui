<template>
  <transition :name="disableTransitions?'':'easy-zoom-in-center'">
    <span :class="[
    'easy-tag',
    'easy-tag--' + effect,
    type?'easy-tag--' + type:'',
    size?'easy-tag--' + size:'',
    {'is-hit':hit}
    ]"
    @click="$emit('click', $event)"
    :style={backgroundColor:color}
    >
      <slot></slot>
      <easy-icon v-if="closable" class="fa-close easy-tag__close" @click.stop="$emit('close', $event)"></easy-icon>
    </span>
  </transition>
</template>
<script>
import EasyIcon from "@/components/icon"
export default {
  name: 'easy-tag',
  components: {
    EasyIcon
  },
  props: {
    type:{
      type: String,
      default: ""
    },
    closable:{
      type: Boolean,
      default: false
    },
    disableTransitions:{
      type: Boolean,
      default: false
    },
    hit:{
      type: Boolean,
      default: false
    },
    color:{
      type: String,
      default: ""
    },
    size:{
      type: String,
      default: ""
    },
    effect:{
      type: String,
      default: "light",
      validator: (value)=>{
        return ['dark', 'light', 'plain'].indexOf(value)>-1
      }
    }
  }
}
</script>