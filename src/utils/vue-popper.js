import Vue from 'vue';
import {
  createPopper
} from '@popperjs/core';
import EasyArrow from "@/components/arrow"
import EasyIcon from "@/components/icon"
import EasyButton from "@/components/button"

export default{
  components: {
    EasyArrow,
    EasyIcon,
    EasyButton
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: ''
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default () {
        return {
          boundariesElement: 'body',
          gpuAcceleration: false
        }
      }
    },
    openDelay: {
      type: Number,
      default: 0
    },
    popperClass: {
      type: String,
      default: ''
    },
    tabindex: {
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      popperInstance: null,
      showTip: false,
      referenceEl: null
    }
  },
  computed:{
    rPlacement: function () {
      // return "bottom"
      let match = this.placement.match(/^([a-z])+/ig)
      if (match && match.length) {
        match = match[0]
        const reverse = {
          'left': 'right',
          'right': 'left',
          'bottom': 'top',
          'top': 'bottom',
        }
        return reverse[match]
      }
    }
  },
  watch:{
    value: {
      immediate: true,
      handler(val) {
        this.showTip = val;
      }
    },
    showTip: {
      immediate: true,
      handler(newvalue) {
        this.$emit('input', newvalue)
        newvalue ? this.$emit("show") : this.$emit("hide");
        if (this.manual || (this.trigger && this.trigger=="manual")) {
          if (newvalue) {
            this.pShow()
          } else {
            this.pHide()
          }
        }
      }
    },
    disabled: function () {
      this.hide()
    }
  },
  beforeCreate() {
    this.popperVM = new Vue({
      data: {
        node: ''
      },
      render() {
        return this.node;
      }
    }).$mount();
    this.dealyhideTimeout = function () {
      setTimeout(() => {
        this.hide()
      }, 200)
    }
  },
  methods:{
    create() {
      if (this.disabled) {
        return;
      }
      console.log('create')
      const button = this.referenceEl;
      const tooltip = this.popperEl;
      document.body.appendChild(this.popperEl);
      const arrow = this.arrowEl;
      let option = this.popperOptions
      option.placement = this.placement
      option.modifiers = [{
          name: 'offset',
          options: {
            offset: [this.offset, 8],
          },
        },
        {
          name: 'arrow',
          options: {
            element: arrow,
            padding: 5
          },
        },
      ];
      this.popperInstance = createPopper(button, tooltip, option);
    },
    destory() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
    pShow() {
      // 延迟显示逻辑
      clearTimeout(this.showTimeout)
      clearTimeout(this.hideTimeout)
      this.showTimeout = setTimeout(() => {
        this.showTip = true
        this.create();
      }, this.openDelay)
    },
    pHide() {
      clearTimeout(this.showTimeout)
      clearTimeout(this.hideTimeout)
      // 延迟隐藏逻辑
      this.hideTimeout = setTimeout(() => {
        this.showTip = false
      }, this.hideAfter || this.closeDelay || 0)
    }
  }
}