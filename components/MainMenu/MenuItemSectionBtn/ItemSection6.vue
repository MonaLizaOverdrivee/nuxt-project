<template>
  <div class="p-1 row-start-2 row-end-7 col-start-auto">
    <div class="grid grid-rows-5-auto grid-flow-col auto-cols-fr">
      <div v-for="(contactGroup, i) in itemsData" :key="i" class="p-1">
        <ul>
          <li class="font-semibold">{{ contactGroup.title }}</li>
          <li v-for="(contact, idx) in contactGroup.data" :key="idx">
            {{ contact }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-2">
      <nuxt-link to="/">
        <span class="text-primary font-medium">Часто задаваемые вопросы</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
