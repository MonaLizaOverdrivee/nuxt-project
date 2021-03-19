<template>
  <div class="row-start-2 row-end-7 flex flex-wrap">
    <div v-for="itm in 5" :key="itm" class="w-24 h-24 xl:w-32 xl:h-32 m-2">
      <button
        class="w-full h-full rounded-xl border-primary border-2 uppercase"
      >
        sad
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.icon {
  min-width: 160px;
  max-height: 160px;
}
</style>
