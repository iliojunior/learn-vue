<template lang="pug">
  #todos
    TodoList
    v-btn(
    to="todos/new"
    ) Cadastrar Novo
</template>

<script>
  import TodoList from '@/components/TodoList'

  export default {
    name: 'todos',
    components: {TodoList}
  }
</script>