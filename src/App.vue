<template lang="pug">
  v-app#app(
    standalone
    light
    toolbar
  )
    Layout
</template>

<script>
  import Layout from './components/Layout'
  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "stylus/icons.styl"
</style>