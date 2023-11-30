<template>
  <div id="pokedex">
    <search-box v-model="queryInput" />
    <pokemon-list :items="filteredPokemons" @itemClick="onItemClick" @iconClick="onIconClick" />
    <error-component v-show="filteredPokemons.length === 0" @clickBtn="goHome"/>
    <pokemon-detail
      v-if="showPokemonModal"
      ref="pokemonModalRef"
      :pokemon="currentPokemonDetail"
      :pokemon-image-url="currentPokemonDetail.imageUrl"
      @close="closePokemonModal">
    </pokemon-detail>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList.vue'
import PokemonDetail from '@/components/PokemonDetail.vue'
import SearchBox from '@/components/SearchBox.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    PokemonList,
    PokemonDetail,
    SearchBox,
    ErrorComponent
  },
  data() {
    return {
      showPokemonModal: false
    }
  },
  computed: {
    ...mapGetters('pokemonApiModule', ['filteredPokemons', 'currentPokemonDetail', 'getSearchQuery']),
    queryInput: {
      get() {
        return this.getSearchQuery
      },
      set(value) {
        this.setSearchQuery(value)
      }
    }
  },
  methods: {
    ...mapActions('pokemonApiModule', ['fetchPokemonDetail', 'toggleFavoritePokemon', 'setSearchQuery', 'clearStates']),
    async onItemClick(name) {
      await this.fetchPokemonDetail(name)
      this.openPokemonModal()
    },
    onIconClick(name) {
      this.toggleFavoritePokemon(name)
    },
    goHome() {
      this.clearStates()
      this.$router.push({ name: 'Home' })
    },
    openPokemonModal() {
      this.showPokemonModal = true
      this.$nextTick(() => {
        this.$refs.pokemonModalRef.showModal()
      })
    },
    closePokemonModal() {
      this.$refs.pokemonModalRef.hideModal()
      this.showPokemonModal = false
    }
  },
  watch: {
    showPokemonModal(newVal) {
      if (!newVal) {
        this.$refs.pokemonModalRef.hideModal()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #pokedex{
    padding-bottom: 95px;
  }
</style>
