module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/tests/unit/apiRepository.spec.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)'
  ]
}
