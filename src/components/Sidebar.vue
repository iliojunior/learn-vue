<template lang="pug">
  v-navigation-drawer(
  temporary
  v-model="drawer"
  light
  overflow
  absolute
  )
    v-toolbar(flat)
    v-divider
    v-list.pt-0(
    dense
    )
      v-list-tile(
      router
      v-for="item in links"
      :to="item.link"
      :key="item.title"
      )
        v-list-tile-action
          v-icon(v-html="item.icon")
        v-list-tile-content
          v-list-tile-title(v-text="item.title")
</template>

<script>
  export default {
    name: 'sidebar',
    props: ['drawerOpened'],
    data () {
      return {
        drawer: this.drawerOpened,
        links: [
          {link: '/home', title: 'Home', icon: 'home'},
          {link: '/page1', title: 'Página 1', icon: 'check_circle'},
          {link: '/page2', title: 'Página 2', icon: 'class'},
          {link: '/todos', title: 'Todos', icon: 'assignment'}
        ]
      }
    },
    watch: {
      drawerOpened () {
        this.drawer = this.drawerOpened
      },
      drawer () {
        this.$parent.drawerOpened = this.drawer
      }
    }
  }
</script>