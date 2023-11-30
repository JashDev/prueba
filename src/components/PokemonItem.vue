<template>
  <div class="row align-items-center item-wrapper">
    <div class="col content text-left align-self-center" @click="onItemClick">
      <span class="align-self-center ps-2">{{ capitalizedName }}</span>
    </div>
    <div class="col-auto icon" @click.stop="onIconClick">
      <div class="icon-wrapper" @click.stop="onIconClick">
        <div class="icon">
          <svg-icon name="fav" size="26" :color="isFavorite ? 'var(--color-golden)' : 'var(--color-gray-1)'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon/SvgIcon.vue'
export default {
  name: 'Item',
  components: {
    SvgIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    capitalizedName() {
      if (!this.name) return ''
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }
  },
  methods: {
    onItemClick() {
      this.$emit('itemClick', this.name)
    },
    onIconClick() {
      this.$emit('iconClick', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>

.item-wrapper{
  margin-bottom: 10px;
  background-color: $color-white-0;
  border-radius: 8px;

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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 60px;
}

.content > span {
  align-self: center;
  font-size: $font-size-h3;
  font-weight: 500;
  color: $color-gray-3;
}
</style>
