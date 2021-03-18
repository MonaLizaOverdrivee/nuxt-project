<template>
  <div class="row-start-2 row-end-7 flex justify-center">
    <div
      v-for="itm in 4"
      :key="itm"
      class="flex-auto p-2 border-2 border-blue-500 m-2 rounded-xl bg-blue-100"
    >
      <span class="font-medium">Saddasd;sladl</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  max-width: 30rem;
  min-width: 20rem;
  height: 14rem;
}
</style>
