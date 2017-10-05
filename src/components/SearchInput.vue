<template lang="pug">
  #searchInput
    v-text-field.teste(
    append-icon="search"
    label="Busca"
    single-line
    v-model="innerSearch"
    )
</template>

<script>
  export default {
    name: 'SearchInput',
    data () {
      return {
        innerSearch: ''
      }
    },
    watch: {
      innerSearch () {
        this.$parent.searchTerm = this.innerSearch
      }
    }
  }
</script>
