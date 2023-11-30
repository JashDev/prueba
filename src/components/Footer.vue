<template>
  <footer class="custom-footer">
    <div class="container flex-grow-1">
      <div class="row justify-content-center">
        <div ref="router-wrapper" class="col-md-7 text-center">
          <div class="row justify-content-center actions-container">
            <div class="col-6 ps-1 pe-1 pe-md-2">
              <reusable-button :disabled="!favActive" :fullWidth="true" :label="$t('POKEDEX.BTN_LIST_POKEMON')" @click="toggleFavoriteBtn">
                <template #icon>
                  <svg-icon class="me-md-3 me-2" size="22" name="list" color="var(--color-white-0)"/>
                </template>
              </reusable-button>
            </div>
            <div class="col-6 ps-1 ps-md-2 pe-1 ">
              <reusable-button  :disabled="favActive" :fullWidth="true" :label="$t('POKEDEX.BTN_FAVS')" @click="toggleFavoriteBtn">
                <template #icon>
                  <svg-icon class="me-md-3 me-2" size="22" name="fav" color="var(--color-white-0)"/>
                </template>
              </reusable-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ReusableButton from './ReusableButton.vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Footer',
  components: {
    ReusableButton,
    SvgIcon
  },
  computed: {
    ...mapState('pokemonApiModule', ['favActive'])
  },
  methods: {
    ...mapActions('pokemonApiModule', ['toggleFavoriteBtn'])
  }
}
</script>

<style lang="scss" scoped>
  .custom-footer {
    position: fixed;
    z-index: 100;
    bottom: 0;

    width: 100vw;
    height: 80px;

    background: $color-white-0;
    box-shadow: 0 -5px 4px 0 rgb(0 0 0 / 5%);
  }

  .actions-container {
    margin-top: 15px;
  }
</style>
