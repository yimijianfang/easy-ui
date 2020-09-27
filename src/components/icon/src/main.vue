<template>
  <i class="easy-icon fa" :class="name" @click="$emit('click', $event)">
    <slot></slot>
  </i>
</template>
<script>
export default {
  name: 'easy-icon',
  props: {
    name:{
      type: String
    }
  }
}
</script>