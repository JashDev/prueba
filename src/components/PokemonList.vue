<template>
  <div class="container">
    <pokemon-item
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :isFavorite="item.isFavorite"
      @itemClick="onItemClick"
      @iconClick="onIconClick">
    </pokemon-item>
  </div>
</template>

<script>
import PokemonItem from './PokemonItem.vue'

export default {
  name: 'PokemonList',
  components: {
    PokemonItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onItemClick(name) {
      this.$emit('itemClick', name)
    },
    onIconClick(name) {
      this.$emit('iconClick', name)
    }
  }
}
</script>
