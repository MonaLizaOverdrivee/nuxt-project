<template>
  <div>
    <h1>{{ $route.path }}</h1>
    <span>{{ typeof pageData }}</span>
    <pre>{{ pageData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {},
    }
  },
  mounted() {
    this.fetchT()
  },
  methods: {
    async fetchT() {
      const some = await this.$axios.$get(
        `http://localhost:1337/Pages?URL${this.$route.fullPath}`
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
