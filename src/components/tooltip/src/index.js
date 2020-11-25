import vuePopper from "@/utils/vue-popper.js"

export default {
  name: 'easy-tool-tip',
  mixins: [
    vuePopper
  ],
  props:{
    effect:{
      type: String,
      default: 'dark',
      validator: (value)=>{return ['dark', 'light'].indexOf(value)>-1}
    },
    manual:{
      type: Boolean,
      default: false
    },
    enterable:{
      type: Boolean,
      default: true
    },
    hideAfter:{
      type: Number,
      default: 0
    },
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
  data(){
    return {
      
    }
  },
  computed:{
  },
  watch:{
    
  },
  mounted: function(){
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
    show(){
      if (!this.expectedState || this.manual) return;
      if (this.disabled) {
        return;
      }
      this.pShow()
    },
    hide(){
      if (this.enterable && this.expectedState || this.manual) return;
      this.pHide()
    },
  }
}