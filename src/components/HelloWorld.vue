<template>
  <div class="hello">
    <h1>The count is {{ fetchCount }}</h1>
    <button
      class="btn btn-primary"
      @click="increment"
    >Increase</button>
    <button
      class="btn btn-primary"
      @click="decrement"
    >Decrease</button>
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
    'fetchCount'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
