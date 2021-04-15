<template>
  <div class="flex flex-col faculty__header relative">
    <div
      class="absolute inset-0 z-20"
      style="background-color: rgb(0, 0, 0, 0.6)"
    ></div>
    <div class="absolute inset-0">
      <img class="object-cover w-full h-full z-10" :src="img" />
    </div>
    <div class="z-20 flex-auto flex justify-center items-center">
      <h1 class="text-white">{{ title }}</h1>
    </div>
    <div
      class="container flex items-end justify-between p-2.5 text-white font-medium z-20"
    >
      <div>
        <font-awesome-icon icon="phone" /><span class="ml-2">{{
          contact.phone
        }}</span>
      </div>
      <div>
        <font-awesome-icon :icon="['far', 'envelope']" /><span class="ml-2">{{
          contact.email
        }}</span>
      </div>
      <div>
        <font-awesome-icon icon="map-marker-alt" /><span class="ml-2">{{
          contact.location
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: 'Страница не найдена',
    },
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
