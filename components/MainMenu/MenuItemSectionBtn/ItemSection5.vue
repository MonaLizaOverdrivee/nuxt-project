<template>
  <div class="row-start-2 row-end-7 col-start-auto relative section">
    <div class="grid grid-cols-6 grid-flow-row h-56 gap-1">
      <div v-for="itm in 18" :key="itm">
        <img
          class="img"
          src="https://www.rgo.ru/sites/default/files/styles/head_image_article/public/odna_iz_konkursnyh_rabot_2011_goda._ogonkovyy_miting._v.a._masoshin.jpg?itok=xsNrqUux"
          alt=""
        />
      </div>
    </div>
    <div
      class="absolute flex inset-0 justify-center items-center bg-primary opacity-70 rounded-lg cursor-pointer section__wraper"
    >
      <span class="text-white text-3xl section__title">Фотогалерея</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  @apply rounded-lg;
}
.section:hover .section__wraper {
  @apply opacity-100;
}
.section:hover .section__title {
  @apply underline;
}
.section__wraper,
.section__title {
  transition: all 0.3s linear;
}
</style>
