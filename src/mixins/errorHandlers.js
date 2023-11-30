import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('pokemonApiModule', ['clearStates']),
    handleApiError(_) {
      this.clearStates()
      this.$router.push({ name: 'ErrorView' })
    }
  }
}
