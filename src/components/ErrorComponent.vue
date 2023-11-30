<template>
  <div id="error-view">
    <h1 class="title">{{$t('EMPTY_LIST.TITLE')}}</h1>
    <h4 class="subtitle">{{$t('EMPTY_LIST.SUBTITLE')}}</h4>
    <reusable-button :label="$t('EMPTY_LIST.BTN_LABEL')" @click="$emit('clickBtn')"/>
  </div>
</template>

<script>
import ReusableButton from './ReusableButton.vue'
export default {
  name: 'ErrorView',
  components: {
    ReusableButton
  }
}
</script>

<style lang="scss" scoped>
#error-view{
  .title{
    margin-bottom: 10px;
    font-weight: 700;
    line-height: 43.2px;
    color: $color-gray-3;
  }

  .subtitle{
    margin-bottom: 25px;
    font-weight: 500;
    line-height: 30px;
    color: $color-gray-2;
  }
}
</style>
