<template>
  <div>
    <AppMenu />
    <div>
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppMenu from '../components/MainMenu/AppMenu'
import AppFooter from '../components/Footer/AppFooter'
export default {
  components: { AppMenu, AppFooter },
  head() {
    return {
      bodyAttrs: {
        class: [this.colorScheme, this.sizeScheme],
      },
    }
  },
  computed: {
    ...mapGetters('lowVision', ['lowVisionState', 'colorClass', 'sizeClass']),
    colorScheme() {
      return this.lowVisionState ? this.colorClass : ''
    },
    sizeScheme() {
      return this.lowVisionState ? this.sizeClass : ''
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
