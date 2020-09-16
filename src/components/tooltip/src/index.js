import Vue from 'vue';
import { createPopper } from '@popperjs/core';
import EasyArrow from "@/components/arrow"
// import debounce from 'throttle-debounce/debounce';

export default {
  name: 'easy-tool-tip',
  components:{
    EasyArrow
  },
  props:{
    effect:{
      type: String,
      default: 'dark',
      validator: (value)=>{return ['dark', 'light'].indexOf(value)>-1}
    },
    content:{
      type: String,
      default: ''
    },
    placement:{
      type: String,
      default: 'bottom'
    },
    disabled:{
      type: Boolean,
      default: false
    },
    offset:{
      type: Number,
      default: 0
    },
    transition:{
      type: String,
      default: ''
    },
    visibleArrow:{
      type: Boolean,
      default: true
    },
    popperOptions:{
      type: Object,
      default(){
        return {
          boundariesElement: 'body',
          gpuAcceleration: false
        }
      }
    },
    openDelay:{
      type: Number,
      default: 0
    },
    manual:{
      type: Boolean,
      default: false
    },
    popperClass:{
      type: String,
      default:''
    },
    enterable:{
      type: Boolean,
      default: true
    },
    hideAfter:{
      type: Number,
      default: 0
    },
    tabindex:{
      type: Number,
      default: 0
    },
    value:{
      type: Boolean,
      default: false
    }
  },
  beforeCreate(){
    this.popperVM = new Vue({
      data: { node: '' },
      render() {
        return this.node;
      }
    }).$mount();
    this.dealyhideTimeout = function(){
      setTimeout(()=>{
        this.hide()
      },200)
    }
  },
  render(){
    if (this.popperVM) {
      this.popperVM.node = (
        <transition 
          name="easy-tooltip-fade"
          onAfterLeave={ this.destory }
        >
          <div
            ref="popper"
            role="tooltip"
            v-show={this.showTip}
            onMouseleave={ () => { this.expectedState=false;this.dealyhideTimeout(); } }
            onMouseenter= { () => { this.expectedState=true; } }
            class={[
              'easy-tooltip', 
              'is-'+this.effect,
              this.popperClass
            ]
            }
            >
            {this.$slots.content || this.content}
            <easy-arrow 
              class="easy-tooltip_arrow" 
              style = {
                this.visibleArrow?
                "": "display:none"
              }
              ref="arrow" 
              direction = {
                this.rPlacement
              }
              isSingle={this.effect==='light'}
              data-popper-arrow
            >
            </easy-arrow>
          </div>
        </transition>
        );
    }
    return this.$slots.default
  },
  mixins:[
    
  ],
  data(){
    return {
      popperInstance: null,
      showTip: false,
      referenceEl: null
    }
  },
  computed:{
    rPlacement: function(){
      let match = this.placement.match(/^([a-z])+/ig)
      if (match && match.length){
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
      handler(newvalue){
        this.$emit('input', newvalue)
        if(this.manual){
          if(newvalue){
            this.pShow()
          }else{
            this.pHide()
          }
        }
      }
    },
    disabled: function(){
      this.hide()
    }
  },
  mounted: function(){
    console.log('mounted')
    const button = this.referenceEl = this.$el;
    this.$nextTick(()=>{
      this.popperEl = this.$refs.popper
      this.arrowEl = this.$refs.arrow.$el
    })
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
      button.addEventListener(event, () => {
        this.expectedState = true
        this.show()
      });
    });

    hideEvents.forEach(event => {
      button.addEventListener(event, () => {
        this.expectedState = false
        this.dealyhideTimeout()
      });
    });

    if (this.value && this.popperVM){
      this.popperVM.$nextTick(() => {
        if (this.value) {
          this.pShow();
        }
      });
    }
  },
  methods:{
    create(){
      if(this.disabled){
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
    destory(){
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
    show(){
      if (!this.expectedState || this.manual) return;
      if (this.disabled) {
        return;
      }
      this.pShow()
    },
    pShow(){
      // 延迟显示逻辑
      clearTimeout(this.showTimeout)
      clearTimeout(this.hideTimeout)
      this.showTimeout = setTimeout(() => {
        this.showTip = true
        this.create();
      }, this.openDelay)
    },
    hide(){
      if (this.enterable && this.expectedState || this.manual) return;
      this.pHide()
    },
    pHide(){
      clearTimeout(this.showTimeout)
      clearTimeout(this.hideTimeout)
      // 延迟隐藏逻辑
      this.hideTimeout = setTimeout(() => {
        this.showTip = false
      }, this.hideAfter)
    }
  }
}