// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Vuex, { mapState, mapGetters } from 'vuex'

Vue.use(Vuex)

const counter = {
  template: `
  <div>
    <span>All Todos: {{ count }}</span>
    <br>
  </div>
  `,
  computed: {
    ...mapState(['count']),
    find2nd: function () {
      return this.$store.getters.getTodoById(2)
    }
  }
}

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Do homework', done: true },
      { id: 2, text: 'Do housework', done: true }
    ],
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.number
    }
  },
  getters: {
    allTodos: (state, getters) => state.todos.length,
    getTodoById: state => id => state.todos.find(todo => todo.id === id)
  },
  actions: {
    increment2 (context, params) {
      debugger
      context.commit('increment', params)
    }
  }
})

store.commit('increment', { number: 10 })
setTimeout(() => {
  store.dispatch('increment2', { number: 20 })
}, 3000)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { counter },
  template: `
  <div class="app">
    <counter></counter>
  </div>`
})
