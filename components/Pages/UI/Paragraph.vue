<script>
export default {
  render(createElement) {
    return createElement('p', {
      domProps: {
        innerHTML:
          'ad <a href="#" class="text-primary underline">asdsadsad</a> asd',
      },
      class: { 'font-bold': true },
    })
  },
}
</script>

<style scoped>
a.link {
  @apply text-primary;
}
</style>
