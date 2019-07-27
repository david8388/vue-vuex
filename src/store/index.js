import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: []
}

const getters = {
  TODOS: state => state.todos
}

const mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload
  },
  ADD_TODO: (state, payload) => {
    state.TODOS.push(payload)
  }
}

const actions = {
  GET_TODO: (context, payload) => {
    setTimeout(() => {
      const data = [
        { id: 1, title: 'do laundry' },
        { id: 2, title: 'do housework' }
      ]
      context.commit('SET_TODO', data)
    }, 500)
  },
  SAVE_TODO: (context, payload) => {
    setTimeout(() => {
      context.commit('ADD_TODO', payload)
    }, 500)
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
