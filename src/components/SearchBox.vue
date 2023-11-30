<template>
  <div class="search-box">
    <svg-icon class="ms-3" name="search" size="18" color="var(--color-gray-1)"/>
    <input
      type="text"
      class="search-input"
      :value="value"
      @input="updateValue"
      placeholder="Search"
    />
  </div>
</template>

<script>
import SvgIcon from './SvgIcon/SvgIcon.vue'
export default {
  name: 'SearchBox',
  components: {
    SvgIcon
  },
  props: {
    value: String
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;

  height: 50px;
  margin-top: 35px;
  margin-bottom: 40px;

  background: #FFF;
  border-radius: 5px;
}

.search-icon {
  margin-left: 10px;
}

.search-input {
  flex-grow: 1;

  padding: 10px;

  font-family: $font-stack-montserrat;
  font-size: $font-size-h6;
  font-weight: 500;
  line-height: 22.4px;
  color: $color-gray-3;

  border: none;
  border-radius: 5px;
  outline: none;
}

.search-input::placeholder {
  color: $color-gray-1;
}

</style>
