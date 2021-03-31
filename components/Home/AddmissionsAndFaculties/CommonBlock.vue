<template>
  <div class="pt-2 md:pt-10">
    <div class="container flex flex-col md:flex-row">
      <AddmissionsBlock />
      <FacultiesBlock />
    </div>
  </div>
</template>

<script>
import AddmissionsBlock from './AddmissionsBlock'
import FacultiesBlock from './FacultiesBlock'

export default {
  components: {
    AddmissionsBlock,
    FacultiesBlock,
  },
}
</script>

<style></style>
