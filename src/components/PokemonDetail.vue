<template>
  <div class="modal fade" ref="pokemonModal" tabindex="-1" aria-labelledby="pokemonModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" :style="{ backgroundImage: 'url(' + landscapeImageUrl + ')' }">
          <div class="close-icon-container" @click="hideModal">
            <svg-icon name="close" size="26.3" color="var(--color-white-0)"/>
          </div>
          <img :src="pokemon.sprites?.other['official-artwork']?.front_default || pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" style="width: 180px;height:180px;">
        </div>
        <div class="modal-body">
          <div class="pokemon-info">
            <p class="pokemon-attribute"><span class="attribute-label">{{$t('POKEMON_DETAIL_MODAL.NAME')}}</span> {{ capitalizedName }}</p>
            <p class="pokemon-attribute"><span class="attribute-label">{{$t('POKEMON_DETAIL_MODAL.WEIGHT')}}</span> {{ pokemon.weight }}</p>
            <p class="pokemon-attribute"><span class="attribute-label">{{$t('POKEMON_DETAIL_MODAL.HEIGHT')}}</span> {{ pokemon.height }}</p>
            <p class="pokemon-attribute"><span class="attribute-label">{{$t('POKEMON_DETAIL_MODAL.TYPES')}}</span> {{ typesString }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <reusable-button :label="$t('POKEMON_DETAIL_MODAL.BTN_LABEL')"  @click="copyToClipboard" />
          <div class="icon-wrapper">
            <div class="icon">
              <svg-icon name="fav" size="26" :color="pokemon.isFavorite ? 'var(--color-golden)' : 'var(--color-gray-1)'"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import landscapeImage from '@/assets/svg/landscape.svg'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import ReusableButton from './ReusableButton.vue'

export default {
  name: 'PokemonModal',
  components: {
    SvgIcon,
    ReusableButton
  },
  data() {
    return {
      landscapeImageUrl: landscapeImage
    }
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.pokemon)
    this.modalInstance = new Modal(this.$refs.pokemonModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  computed: {
    typesString() {
      return this.pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')
    },
    capitalizedName() {
      if (!this.pokemon.name) return ''
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
    }
  },
  methods: {
    showModal() {
      this.modalInstance.show()
    },
    hideModal() {
      this.modalInstance.hide()
    },
    copyToClipboard() {
      const info = `
        Name: ${this.capitalizedName}
        Weight: ${this.pokemon.weight}
        Height: ${this.pokemon.height}
        Type: ${this.typesString}
      `
      navigator.clipboard.writeText(info).then(() => {
      }, (err) => {
        console.error('Could not copy text: ', err)
      })
    }
  },
  beforeDestroy() {
    this.modalInstance.dispose()
  }
}
</script>

<style lang="scss" scoped>
.modal-header {
  position: relative;

  height: 220px;

  color: white;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.pokemon-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close-icon-container {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.modal-body {
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
}

.pokemon-info {
  padding-top: 10px;
  text-align: left;
  border-top: 1px solid #eee;
}

.pokemon-attribute {
  margin: 0;
  padding: 10px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
}

.attribute-label {
  display: inline-block;
  width: 80px;
  font-weight: bold;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: none;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  background-color: $color-white-2;
  border-radius: 50%;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
