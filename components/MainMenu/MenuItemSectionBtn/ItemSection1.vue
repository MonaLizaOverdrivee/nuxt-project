<template>
  <div class="row-start-2 row-end-7 flex flex-wrap">
    <SectionBtn
      v-for="(itm, i) in itemsData"
      :key="i"
      :title="itm.title"
      :icon="itm.icon"
    />
  </div>
</template>

<script>
import SectionBtn from './ItemSectionBtn'

export default {
  components: { SectionBtn },
  props: {
    itemsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
