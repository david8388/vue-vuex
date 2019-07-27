<template>
  <div class="hello">
    <div
      :key="item.id"
      v-for="item in TODOS"
    >
      {{ item.title }}
    </div>
    <button @click="GET_TODO">Get Todos</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters([
    'TODOS'
  ]),
  methods: mapActions([
    'GET_TODO'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
