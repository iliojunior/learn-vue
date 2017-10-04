<template lang="pug">
  v-data-table(
  :headers="headers"
    :items="todoList"
  hide-actions
  )
    template(
    slot="items"
    scope="props"
    )
      tr(xs12 fluid)
        td.text-xs-left(xs5) {{ props.item.name }}
        td.text-xs-left(xs5) {{ props.item.description }}
        td(xs2)
          v-btn(
          @click="deleteTodo(props.item.id)"
          flat
          )
            v-icon delete
</template>

<script>
  export default {
    name: 'todosList',
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
            this.todoList = response.body.data
          })
      },
      deleteTodo (idTodo) {
        const self = this

        this
          .$http
          .delete('api/todos/' + idTodo)
          .then(() => {
            self.todoList = self.todoList.filter((item) => {
              return item.id !== idTodo
            })
          })
      }
    }
  }
</script>