<template>
  <div
    class="w-36 xl:w-40 h-36 m-2 flex flex-col rounded-xl overflow-hidden cursor-pointer shadow-xl section"
    @click="$router.push(url)"
  >
    <div
      class="flex items-center justify-center h-1/2 p-1 bg-primary section__icon"
    >
      <div class="h-full">
        <font-awesome-icon :icon="icon" class="f-icon" />
      </div>
    </div>
    <div
      class="flex-auto flex items-center justify-center bg-blue-100 section__title"
    >
      <div class="text-center text-primary">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
.f-icon {
  width: 100%;
  height: 100%;
  @apply text-white;
}
.section:hover .section__icon {
  @apply bg-blue-100;
  transition: all 0.3s linear;
}
.section:hover .f-icon {
  @apply text-primary;
  transition: all 0.3s linear;
}
.section:hover {
  transform: translate(-10px, -10px);
  box-shadow: 10px 10px 0 0 rgba(0, 136, 204);
  transition: all 0.3s linear;
}
</style>
