<template>
  <div>
    <FacultyPage />
    <h1>{{ $route.path }}</h1>
    <pre>{{ pageData }}</pre>
  </div>
</template>

<script>
import FacultyPage from '../components/Pages/Faculty/FacultyPage'
export default {
  components: { FacultyPage },
  data() {
    return {
      pageData: null,
    }
  },
  mounted() {
    this.$nextTick(() => this.fetchT())
  },
  methods: {
    async fetchT() {
      const some = await this.$axios.$get(
        `http://localhost:1337/Pages?URL=${this.$route.fullPath}`
      )
      if (some.length === 0) {
        console.log('false')
      } else {
        this.pageData = some[0]
      }
      console.log(this.pageData)
      // return some
    },
  },
}
</script>

<style></style>
