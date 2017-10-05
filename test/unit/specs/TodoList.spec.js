import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import TodoList from '@/components/TodoList'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:8081/'

describe('TodoList.vue', () => {
  let idTodo = -1
  let lengthList = 0

  it('Data is a function', (done) => {
    expect(typeof TodoList.data).to.equal('function')
    done()
  })

  it('Methods is an object', (done) => {
    expect(typeof TodoList.methods).to.equal('object')
    done()
  })

  it('Test load Data', done => {
    const Const = Vue.extend(TodoList)
    const vm = new Const().$mount()

    vm.loadData().then((response) => {
      lengthList = vm.todoList.length

      expect(lengthList > 0).to.equal(true)

      let random = Math.floor((Math.random() * lengthList))
      idTodo = vm.todoList[random].id
    })

    done()
  })

  it('Test delete undefined', done => {
    try {
      vm.deleteTodo(idTodo)
    } catch (err) {
      expect(err).to.be.an('Error')
    }
  })

  it('Test delete todo', done => {
    const Constructor = Vue.extend(TodoList)
    const vm = new Constructor().$mount()

    try {
      vm.deleteTodo(idTodo)
        .then((res) => {
          expect(vm.todoList.length === lengthList - 1).to.equal(true)
        })
    } catch (err) {
      expect(err).to.be.an('Error')
    }
    done()
  })
})
