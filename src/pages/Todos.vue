<template lang="pug">
  v-data-table.elevation-1(
  :headers="headers"
    :items="todoList"
  )
    template(
    slot="items"
    scope="props"
    )
      tr
        td {{ props.item.name }}
        td {{ props.item.description }}

</template>

<script>
  export default {
    name: 'todos',
    data () {
      return {
        todoList: [{name: 'Testeasd', description: 'Description'}],
        headers: [
          {sortable: false, text: 'Nome', value: 'name', align: 'left'},
          {sortable: false, text: 'Descrição', value: 'decription', align: 'left'}
        ]
      }
    },
    beforeMount () {
      this.loadData()
    },
    methods: {
      loadData () {
        this
          .$http
          .get('api/todos')
          .then((response) => {
            this.todoList = response.body
          })
      }
    }
  }
</script>