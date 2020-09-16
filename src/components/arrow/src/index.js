export default {
  name: 'easy-arrow',
  props: {
    width: {
      type: Number,
      default: 6
    },
    color: {
      type: String,
      default: '#333'
    },
    direction:{
      type: String,
      default: 'bottom'
    },
    isSingle:{
      type: Boolean,
      default: false
    },
    borderWidth:{
      type: Number,
      default: 1
    }
  },
  render() {
    return (
      <div style={this.arrowStyle} class={[
        'easy-arrow',
        'is-'+this.direction,
        this.isSingle?'is-single':''
        ]}>
        <div  class="easy-arrow_before" style={this.arrowbeforeStyle}></div>
      </div>
    )
  },
  data() {
    return {
      
    }
  },
  computed:{
    arrowStyle: function(){
      let style = {
        borderWidth: this.width + 'px'
      }
      switch(this.direction){
        case 'top':
          style['borderTopColor'] = this.color
          break;
        case 'bottom':
          style['borderBottomColor'] = this.color
          break;
        case 'left':
          style['borderLeftColor'] = this.color
          break;
        case 'right':
          style['borderRightColor'] = this.color
          break;
      }
      return style;
    },
    arrowbeforeStyle: function(){
      let style = {
        borderWidth: this.width-1 + 'px'
      }
      switch (this.direction) {
        case 'top':
          style['marginLeft'] = '-' + (this.width - 1) + 'px';
          style['top'] = this.borderWidth + 'px';
          break;
        case 'bottom':
          style['marginLeft'] = '-' + (this.width - 1) + 'px'
          style['bottom'] = this.borderWidth + 'px';
          break;
        case 'left':
          style['marginTop'] = '-' + (this.width - 1) + 'px'
          style['left'] = this.borderWidth + 'px';
          break;
        case 'right':
          style['marginTop'] = '-' + (this.width - 1) + 'px'
          style['right'] = this.borderWidth + 'px';
          break;
      }
      return style;
    }
  },
  mounted: function () {
    
  },
  methods: {

  }
}