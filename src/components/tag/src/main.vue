<template>
  <i class="easy-icon fa" :class="name">
    <slot></slot>
  </i>
</template>
<script>
export default {
  name: 'easy-tag',
  props: {
    name:{
      type: String
    }
  }
}
</script>