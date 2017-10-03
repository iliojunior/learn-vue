<template lang="pug">
  v-container(
  grid-list-md
  text-xs-center
  )
    v-layout(
    row
    wrap
    )
      v-flex(
      xs12
      md6
      )
        v-card(light)
          v-card-text(text-bold) Metade
      v-flex(
      xs12
      md6
      )
        v-card(dark)
          v-card-text Metade
</template>

<script>
  export default {
    name: 'Page1'
  }
</script>