<template>
  <div class="d-flex flex-column vh-100">
    <div class="container flex-grow-1">
      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer v-show="$route.meta.includeFooter" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Footer
  }
}
</script>

<style lang='scss' scoped>

.row {
  height: 100%;
}

</style>
