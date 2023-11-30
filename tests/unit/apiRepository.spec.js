import apiClient from '@/api/apiClient'

describe('Pokemon API', () => {
  it('should maintain the response format for /pokemon endpoint', async() => {
    const response = await apiClient.get('/pokemon')
    expect(response.data).toHaveProperty('count')
    expect(response.data).toHaveProperty('next')
    expect(response.data).toHaveProperty('previous')
    expect(response.data).toHaveProperty('results')
    expect(Array.isArray(response.data.results)).toBeTruthy()
    expect(response.data.results[0]).toHaveProperty('name')
    expect(typeof response.data.results[0].name).toBe('string')
  })
})

describe('Pokemon API', () => {
  it('should return a pokemon with the correct structure for /pokemon:name endpoint', async() => {
    const pokemonName = 'pikachu'
    const response = await apiClient.get(`/pokemon/${pokemonName}`)

    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('weight')
    expect(response.data).toHaveProperty('height')
    expect(response.data).toHaveProperty('types')

    expect(typeof response.data.name).toBe('string')
    expect(typeof response.data.weight).toBe('number')
    expect(typeof response.data.height).toBe('number')
    expect(Array.isArray(response.data.types)).toBeTruthy()

    response.data.types.forEach(type => {
      expect(type).toHaveProperty('type')
      expect(typeof type.type).toBe('object')
      expect(type.type).toHaveProperty('name')
      expect(typeof type.type.name).toBe('string')
    })
  })
})
