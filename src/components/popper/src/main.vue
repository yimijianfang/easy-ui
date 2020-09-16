<script>
import Vue from 'vue';
import { createPopper } from '@popperjs/core';
import EasyButton from "@/components/button"
export default {
  name: 'easy-popper',
  components:{
    EasyButton
  },
  beforeCreate(){
    console.log('before create')
    this.popperVM = new Vue({
      data: { node: '' },
      render() {
        return this.node;
      }
    }).$mount();
  },
  render(){
    if (this.popperVM) {
      console.log('rendered')
      this.popperVM.node = (
        <div
          ref="popper"
          role="tooltip"
          v-show={this.showTip}
          class="easy-tooltip"
          id="tooltip"
          >
          我是提示我是提示我是提示
          <div id="arrow" ref="arrow" data-popper-arrow></div>
        </div>);
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
  watch:{
    showTip:{
      immediate: true,
      handler(newvalue){
        if(newvalue){
          this.create()
        }else{
          this.hide()
        }
      }
    }
  },
  mounted: function(){
    console.log('mounted')
    const button = this.referenceEl = this.$el;
    this.$nextTick(()=>{
      this.popperEl = this.$refs.popper
      this.arrowEl = this.$refs.arrow
    })
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
      button.addEventListener(event, this.show);
    });

    hideEvents.forEach(event => {
      button.addEventListener(event, this.hide);
    });
  },
  methods:{
    create(){
      const button = this.referenceEl;
      const tooltip = this.popperEl;
      document.body.appendChild(this.popperEl);
      const arrow = this.arrowEl;
      this.popperInstance = createPopper(button, tooltip, {
        placement: "bottom",
        modifiers:[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'arrow',
            options: {
              element: arrow,
              padding: 5
            },
          },
        ]
      });
    },
    destory(){
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
    show(){
      console.log('show')
      this.showTip = true
      this.create();
    },
    hide(){
      this.showTip = false
      this.destory()
    }
  }
}
</script>
<style>
  .tooltip-container{
    margin-bottom:100px;
    margin-top:100px;
  }
  .easy-tooltip{
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }
  #arrow,#arrow::before {
    text-align: left;
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

    #arrow::before {
      content: '';
      transform: rotate(45deg);
      background: #333;
    }

    #tooltip[data-popper-placement^='top']>#arrow {
      bottom: -4px;
    }

    #tooltip[data-popper-placement^='bottom']>#arrow {
      top: -4px;
    }

    #tooltip[data-popper-placement^='left']>#arrow {
      right: -4px;
    }

    #tooltip[data-popper-placement^='right']>#arrow {
      left: -4px;
    }
</style>