import apiRepository from '@/api/apiRepository'
import Vue from 'vue'

const state = {
  pokemons: [],
  pokemonDetail: null,
  loadedPokemonDetails: {},
  favActive: false,
  searchQuery: ''
  // nextPageUrl: null // TODO: include if pagination is needed
}

const getters = {
  currentPokemonDetail: state => state.pokemonDetail,
  getSearchQuery: state => state.searchQuery,
  filteredPokemons: (state) => {
    let filtered = state.pokemons
    if (state.favActive) {
      filtered = filtered.filter(pokemon => pokemon.isFavorite)
    }
    if (state.searchQuery) {
      filtered = filtered.filter(pokemon => pokemon.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
    return filtered.map((pokemon) => {
      return {
        name: pokemon.name,
        isFavorite: pokemon.isFavorite
      }
    })
  }
}

const actions = {
  async fetchPokemons({ commit }) {
    const response = await apiRepository.getPokemons()
    commit('SET_POKEMONS', response.data.results)
  },

  async fetchPokemonDetail({ commit, dispatch }, name) {
    if (state.loadedPokemonDetails[name]) {
      commit('SET_POKEMON_DETAIL', state.loadedPokemonDetails[name])
      return
    }
    const response = await apiRepository.getPokemonDetail(name)
    commit('ADD_POKEMON_DETAIL', { name, detail: response.data })
    commit('SET_POKEMON_DETAIL', response.data)
  },
  toggleFavoritePokemon({ commit }, pokemonName) {
    commit('TOGGLE_FAVORITE_POKEMON', pokemonName)
  },
  toggleFavoriteBtn({ commit }, pokemonName) {
    commit('TOGGLE_FAVORITE_BTN', pokemonName)
  },
  clearStates({ commit }) {
    commit('CLEAR_STATES')
  },
  setSearchQuery({ commit }, searchQuery) {
    commit('SET_SEARCH_QUERY', searchQuery)
  }
  // TODO: include if pagination is needed
  // async loadMorePokemons({ commit, state }) {
  //   if (!state.nextPageUrl) return
  //   try {
  //     const response = await apiRepository.getPokemons(state.nextPageUrl)
  //     commit('SET_POKEMONS', [...state.pokemons, ...response.data.results])
  //     commit('SET_NEXT_PAGE_URL)', response.data.next)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },
}

const mutations = {
  SET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons
  },
  SET_POKEMON_DETAIL(state, pokemonDetail) {
    state.pokemonDetail = pokemonDetail
  },
  ADD_POKEMON_DETAIL(state, { name, detail }) {
    state.loadedPokemonDetails = {
      ...state.loadedPokemonDetails,
      [name]: detail
    }
  },
  CLEAR_STATES(state) {
    state.pokemons = []
    state.pokemonDetail = null
    state.loadedPokemonDetails = {}
    state.favActive = false
    state.searchQuery = ''
  },
  TOGGLE_FAVORITE_POKEMON(state, pokemonName) {
    const pokemonIndex = state.pokemons.findIndex(p => p.name === pokemonName)
    if (pokemonIndex !== -1) {
      const isFavorite = !state.pokemons[pokemonIndex].isFavorite
      Vue.set(state.pokemons[pokemonIndex], 'isFavorite', isFavorite)
    }
  },
  TOGGLE_FAVORITE_BTN(state) {
    state.favActive = !state.favActive
  },
  SET_SEARCH_QUERY(state, searchQuery) {
    state.searchQuery = searchQuery
  }
  // TODO: include if pagination is needed
  // SET_NEXT_PAGE_URL(state, url) {
  //   state.nextPageUrl = url
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
