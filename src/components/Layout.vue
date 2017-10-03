<template lang="pug">
  #layout
    Sidebar(:drawerOpened="drawerOpened")
    Toolbar(:drawerOpened="drawerOpened")
    main
      v-container(fluid)
        v-fade-transition(mode="out-in")
          router-view
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Toolbar from '@/components/Toolbar'

  export default {
    components: {
      Toolbar,
      Sidebar
    },
    data () {
      return {
        drawerOpened: null
      }
    },
    name: 'Layout'
  }
</script>