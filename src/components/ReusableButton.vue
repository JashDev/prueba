<template>
  <button
    :class="['reusable-btn', `reusable-btn-${buttonType}`, { disabled }]"
    :style="{ width: fullWidth ? '100%' : width, height: height, padding: '11px 20px' }"
    @click="$emit('click')"
  >
    <div class="reusable-btn-content">
      <slot name="icon"></slot>
      <span class="reusable-btn-label">
        {{ label }}
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ReusableButton',
  props: {
    buttonType: {
      type: String,
      default: 'primary',
      validator: function(value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.reusable-btn {
  display: inline-block;

  padding: 11px 20px !important;

  border: none;
  border-radius: 60px;

  transition: background-color 0.3s;
}

.reusable-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: $font-size-h5;
  font-weight: 700;
}

.reusable-btn-primary {
  color: $color-white-0;
  background-color: $color-red-1;

  &:hover {
    background-color: $color-red-2;
  }
}

.disabled {
  pointer-events: none;
  color: $color-white-0;
  background-color: $color-gray-1;

  &:hover, &:focus {
    background-color: $color-gray-1;
  }
}
</style>
