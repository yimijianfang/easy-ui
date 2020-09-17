import vuePopper from "@/utils/vue-popper.js"
export default {
  name: 'easy-popover',
  mixins: [
    vuePopper
  ],
  props:{
    trigger: {
      type: String,
      default: 'click',
      validator: (value) => {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      }
    },
    title:{
      type: String,
      default: ''
    },
    width: {
      type: Number|String,
      default: ''
    },
    closeDelay: {
      type: Number,
      default: 200
    },
  },
  render(){
    if (this.popperVM) {
      this.popperVM.node = (
        <transition 
          name="easy-popover-fade"
          onAfterLeave={ this.handleAfterLeave }
          onAfterEnter={ this.handleAfterEnter }
        >
          <div
            ref="popper"
            role="popover"
            v-show={this.showTip}
            onMouseleave={ () => { if(this.trigger!='click'){this.expectedState=false;this.dealyhideTimeout(); }} }
            onMouseenter= { () => { this.expectedState=true; } }
            style={{"width": this.width+'px'}}
            class={[
              'easy-popover',
              this.popperClass
            ]
            }
            >
            <div class="easy-popover__title" v-show={this.title}>
              {this.title}
            </div>
            {this.$slots.default || this.content}
            <easy-arrow 
              class="easy-popover_arrow" 
              style = {
                this.visibleArrow?
                "": "display:none"
              }
              ref="arrow" 
              direction = {
                this.rPlacement
              }
              data-popper-arrow
            >
            </easy-arrow>
          </div>
        </transition>
        );
    }
    return this.$slots.reference || this.$slots.default
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
    console.log('mounted')
    const button = this.referenceEl = (this.$slots.reference || this.$slots.default)[0].elm;
    this.$nextTick(()=>{
      this.popperEl = this.$refs.popper
      this.arrowEl = this.$refs.arrow.$el
    })
    let showEvents=[];
    let hideEvents = [];
    if (this.trigger == "hover") {
      showEvents = ['mouseenter'];
      hideEvents = ['mouseleave'];
    }else if(this.trigger == "click"){
      button.addEventListener('click', () => {
        if(this.showTip){
          this.expectedState = false
          this.dealyhideTimeout()
        }else{
          this.expectedState = true
          this.show()
        }
      });
      document.addEventListener('click', (e)=>{
        if(this.$el.contains(e.target) || this.popperEl.contains(e.target)) return;
        this.expectedState = false
        this.dealyhideTimeout()
      })
    }else if(this.trigger == "focus"){
      showEvents = ['mousedown'];
      hideEvents = ['mouseup'];
    }
    
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
      if (!this.expectedState || this.trigger == "manual") return;
      if (this.disabled) {
        return;
      }
      this.pShow()
    },
    hide(){
      console.trace()
      if (this.expectedState || this.trigger == "manual") return;
      this.pHide()
    },
    handleAfterEnter(){
      this.$emit("after-enter");
    },
    handleAfterLeave() {
      this.$emit("after-leave");
      this.destory()
    },
  }
}