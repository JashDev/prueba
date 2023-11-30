<template>
  <error-component @clickBtn="goHome"/>
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent.vue'
import { mapActions } from 'vuex'
export default {
  name: 'ErrorView',
  components: {
    ErrorComponent
  },
  methods: {
    ...mapActions('pokemonApiModule', ['clearStates']),
    goHome() {
      this.clearStates()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
