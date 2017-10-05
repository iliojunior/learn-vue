<template lang="pug">
  v-toolbar.teal(
  fixed
  dark
  )
    v-toolbar-side-icon(
    @click.stop="toggleDrawer"
    )
    v-toolbar-title Controle de Odin
    v-spacer
</template>

<script>
  export default {
    name: 'toolbar',
    props: ['drawerOpened'],
    methods: {
      toggleDrawer () {
        this.$parent.drawerOpened = !this.$parent.drawerOpened
      }
    }
  }
</script>