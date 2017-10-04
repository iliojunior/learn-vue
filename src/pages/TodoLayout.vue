<template lang="pug">
  v-layout
    v-flex(xs12)
      v-card
        v-container(
        fluid
        text-xs-right
        )
          router-view
</template>

<script>
  export default {
    name: 'TodoLayout'
  }
</script>