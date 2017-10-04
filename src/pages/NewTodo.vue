<template lang="pug">
  #newTodo
    v-form(
    v-model="valid"
    ref="form"
    )
      v-flex(xs12)
        v-text-field(
        label="Nome"
        v-model="todo.name"
        required
        :rules="nameRules"
        )
        v-text-field(
        label="Descrição"
        v-model="todo.description"
        multi-line
        required
        :rules="drescriptionRules"
        )
        v-btn(
        @click="salvarTodo"
        ) Salvar
    v-snackbar(
    :timeout="timeout"
    top=true
    v-model="showSnackbar"
    )
      | {{ textResponse }}
      v-btn.pink--text(
      flat
      @click.native="closeSnackbar"
      ) Close
</template>

<script>
  export default {
    name: 'NewTodo',
    data () {
      return {
        valid: false,
        nameRules: [(v) => !!v || 'Nome é obrigatório'],
        drescriptionRules: [(v) => !!v || 'A descrição é obrigatória'],
        textResponse: '',
        showSnackbar: false,
        timeout: 3000,
        todo: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      salvarTodo () {
        if (this.$refs.form.validate()) {
          this.submitTodo()
        }
      },
      submitTodo () {
        let self = this

        this
          .$http
          .post('api/todos', this.todo)
          .then((response) => {
            if (response.status === 201) {
              self.textResponse = 'Cadastrado com sucesso!'
              self.showSnackbar = true
              setTimeout(() => {
                self.$router.push('/todos')
              }, self.timeout)
            }
          })
          .catch((response) => {
            let messageError = response.body.errors.name.join('\r\n')

            alert(messageError)
          })
      },
      closeSnackbar () {
        this.showSnackbar = false
        this.$router.push('/todos')
      }
    }
  }
</script>