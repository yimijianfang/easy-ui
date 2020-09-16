<template>
  <transition name="easy-alert-fade">
    <div v-show="visible" :class="['easy-alert', 'easy-alert-'+type, {'is-center': center}]">
      <easy-icon :class="['easy_alert__icon',{'is_big': isDes}]" :name="iconClass"></easy-icon>
      <div class="easy_alert__content">
        <span class="easy_alert__title" :class="{'is-bold': isDes}">{{title}}</span>
        <p class="easy_alert__description" v-if="description && !$slots.default">{{description}}</p>
        <p class="easy_alert__description" v-if="$slots.default"><slot></slot></p>
        <i :class="['easy_alert__closebtn',{'fa':closeText==='', 'fa-close':closeText==='', 'is-customed':closeText!==''} ]" v-if="closable" @click="closeAlert">
          {{closeText}}
        </i>
      </div>
    </div>
  </transition>
</template>
<script>
import EasyIcon from "../../icon"
export default {
  name: 'easy-alert',
  components:{
    EasyIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: _=>['info', 'success', 'warning', 'error'].includes(_)
    },
    description: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      visible: true
    }
  },
  computed:{
    iconClass: function(){
      const icons={
        'info': 'fa-info-circle',
        'success': 'fa-check-circle',
        'warning': 'fa-exclamation-circle',
        'error': 'fa-window-close-o',
      }
      return this.showIcon?icons[this.type]:''
    },
    isDes: function(){
      return !!(this.description || this.$slots.default)
    }
  },
  methods:{
    closeAlert(){
      this.$emit('close')
      this.visible = false
    }
  }
}
</script>