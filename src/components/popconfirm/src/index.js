import vuePopper from "@/utils/vue-popper.js"
export default {
  name: 'easy-popconfirm',
  mixins: [
    vuePopper
  ],
  props:{
    title:{
      type: String,
      default: ''
    },
    confirmButtonText:{
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon:{
      type: String,
      default: 'fa-question-circle'
    },
    iconColor:{
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  render(){
    if (this.popperVM) {
      this.popperVM.node = (
        <transition 
          name="easy-popover-fade"
        >
          <div
            ref="popper"
            role="popover"
            v-show={this.showTip}
            onMouseleave={ () => { } }
            onMouseenter= { () => { this.expectedState=true; } }
            class={[
              'easy-popconfirm',
              this.popperClass
            ]
            }
            >
            <p class="easy-popconfirm__main">
              <easy-icon v-show={!this.hideIcon} style={this.iconColor?"color:"+this.iconColor:""} class={this.icon+" easy-popconfirm__icon"}></easy-icon> {this.title}
            </p>
            <div class="easy-popconfirm__action">
              <easy-button size="mini" type={this.cancelButtonType} onClick={()=>{this.handleCancel()}}>{this.cancelButtonText}</easy-button >
              <easy-button size="mini" type={this.confirmButtonType}  onClick={()=>{this.handleConfirm()}}>{this.confirmButtonText}</easy-button >
            </div>
            <easy-arrow 
              class="easy-popconfirm_arrow" 
              style = {
                this.visibleArrow?
                "": "display:none"
              }
              ref="arrow" 
              direction = {
                this.rPlacement
              }
              isSingle
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
    button.addEventListener('click', () => {
      if (this.showTip) {
        this.expectedState = false
        this.dealyhideTimeout()
      } else {
        this.expectedState = true
        this.show()
      }
    });
    document.addEventListener('click', (e) => {
      if (this.$el.contains(e.target) || this.popperEl.contains(e.target)) return;
      this.expectedState = false
      this.dealyhideTimeout()
    })
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
      if (!this.expectedState) return;
      if (this.disabled) {
        return;
      }
      this.pShow()
    },
    hide(){
      if (this.expectedState) return;
      this.pHide()
    },
    handleCancel(){
      this.$emit("onCancel")
      console.log(111)
      this.showTip = false
    },
    handleConfirm(){
      this.$emit("onConfirm")
      this.showTip = false
    }
  }
}