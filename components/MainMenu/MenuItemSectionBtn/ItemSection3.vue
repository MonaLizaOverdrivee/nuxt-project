<template>
  <div class="row-start-2 row-end-7 flex justify-center">
    <div
      v-for="itm in 5"
      :key="itm"
      class="h-40 2xl:h-56 section relative bg-blue-300 m-2 rounded-xl"
    >
      <div
        class="section_content absolute inset-0 p-3 border-2 border-blue-100 rounded-xl bg-blue-100"
      >
        <div class="relative flex flex-col justify-between h-full w-full">
          <div class="absolute bottom-0 left-0 h-1/2 w-1/2">
            <font-awesome-icon icon="home" class="f-icon" />
          </div>
          <div>
            <span class="font-medium">Saddasd;sladl</span>
          </div>
          <div class="text-right text-5xl">&#8594;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  width: 25rem;
}
.section_content:hover {
  @apply border-primary;
  @apply cursor-pointer;
  @apply bg-transparent;
  @apply text-primary;
  transform: translate(-10px, -10px);
  transition: all 0.3s linear;
}
.f-icon {
  width: 100%;
  height: 100%;
  @apply text-blue-200;
  transition: all 0.3s linear;
}
.section_content:hover .f-icon {
  @apply text-primary;
}
</style>
