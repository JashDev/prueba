import apiClient from './apiClient'

/**
 * API repository for Pokémon operations.
 */

/**
 * Fetch the list of Pokémon.
 * @returns {Promise<Object>} A promise that resolves with the list of Pokémon.
 */
function getPokemons() {
  return apiClient.get('/pokemon')
}

/**
 * Fetch details of a specific Pokémon by name.
 * @param {string} name - The name of the Pokémon.
 * @returns {Promise<Object>} A promise that resolves with the details of the Pokémon.
 */
function getPokemonDetail(name) {
  return apiClient.get(`/pokemon/${name}`)
}

export default {
  getPokemons,
  getPokemonDetail
}
