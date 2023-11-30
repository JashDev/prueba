<template>
  <div id="home" class="text-center">
    <div v-show="!loading" class="vertical-centered-container">
      <img contain src='@/assets/svg/pikachu.svg' style="max-width: 100%; max-height: 100%;"/>
      <h2 class="title">
        {{ $t('HOME.TITLE') }}
      </h2>
      <h5 class="subtitle">
        {{ $t('HOME.SUBTITLE') }}
      </h5>
      <reusable-button :label="$t('HOME.BTN_LABEL')" @click="handleGetStarted" />
    </div>
    <div v-show="loading" class="vertical-centered-container">
      <loading-pokeball />
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import ReusableButton from '@/components/ReusableButton.vue'
import LoadingPokeball from '@/components/LoadingPokeball.vue'
import errorHandlers from '@/mixins/errorHandlers'

export default {
  data() {
    return {
      loading: false
    }
  },
  mixins: [errorHandlers],
  components: {
    LoadingPokeball,
    ReusableButton
  },
  methods: {
    ...mapActions('pokemonApiModule', ['fetchPokemons']),
    async handleGetStarted() {
      try {
        this.loading = true
        const startTime = Date.now()
        await this.fetchPokemons()
        const elapsedTime = Date.now() - startTime
        if (elapsedTime < 500) {
          await new Promise(resolve => setTimeout(resolve, 500 - elapsedTime))
        }
        this.$router.push({ name: 'Pokedex' })
      } catch (err) {
        this.handleApiError()
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>

#home {
  height: 100%;

  .vertical-centered-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
  }

  .title {
    margin-top: 60px;
    font-weight: 700;
    line-height: 31.2px;
    color: $color-gray-3;
  }

  .subtitle {
    margin-top: 30px;
    margin-bottom: 50px;

    font-weight: 500;
    line-height: 27px;
    color: $color-gray-2;
  }

}
</style>
