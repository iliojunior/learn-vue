<template lang="pug">
  #todoList
    v-layout(justify-end row wrap)
      SearchInput

    v-data-table(
    :headers="headers"
      :items="todoList"
        :loading="loading"
        :pagination.sync="pagination"
        :total-items="totalItems"
        :rowsPerPageItems="rowsPerPageItems"
    noDataText="Nenhum resultado encontrado"
    rowsPerPageText="Resultados por página:"
    noResultsText="Nenhum resultado encontrado"
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
  import SearchInput from '@/components/SearchInput'

  export default {
    name: 'todosList',
    components: {
      'searchInput': SearchInput
    },
    data () {
      return {
        todoList: [],
        searchTerm: '',
        loading: true,
        pagination: {
          rowsPerPage: 5,
          page: 1
        },
        totalItems: 0,
        rowsPerPageItems: [5, 10, 15, 25, 50],
        headers: [
          {text: 'Nome', value: 'name', align: 'left'},
          {text: 'Descrição', value: 'decription', align: 'left'}
        ]
      }
    },
    beforeMount () {
      this.loadData()
    },
    methods: {
      loadData () {
        const self = this
        self.loading = true

        const {page, rowsPerPage, sortBy, descending} = self.pagination
        let url = 'api/todos?'
        if (page) {
          url += 'page=' + page
        }
        if (rowsPerPage > 0) {
          url += '&limit=' + rowsPerPage
        }
        if (self.searchTerm) {
          url += '&search=' + self.searchTerm
        }
        if (sortBy) {
          url += '&sortBy=' + sortBy + '&descending=' + descending.toString()
        }

        return this.$http
          .get(url)
          .then((response) => {
            self.todoList = response.body.data
            self.totalItems = response.body.total
            self.loading = false
          })
      },
      deleteTodo (idTodo) {
        let existe = false

        if (this.todoList.length === 0) {
          throw new Error('Todo não existe')
        }

        this.todoList.forEach((item) => {
          if (item.id === idTodo) {
            existe = true
          }
        })

        if (!existe) {
          throw new Error('Todo não existe')
        }

        const self = this
        self.loading = true
        return this
          .$http
          .delete('api/todos/' + idTodo)
          .then(() => {
            self.todoList = self.todoList.filter((item) => {
              return item.id !== idTodo
            })
            self.loading = false
          })
      }
    },
    watch: {
      searchTerm (val) {
        this.loadData()
      },
      pagination () {
        this.loadData()
      }
    }
  }
</script>
