<template>
  <div class="row-start-2 row-end-7 col-start-auto section relative">
    <div
      class="absolute inset-0 flex justify-center items-center section__title-wraper"
    >
      <span class="section__title">Фотогаллерея</span>
    </div>
    <div class="flex justify-center">
      <div class="self-end w-80 h-40 -mr-28 mb-2 section__container-img">
        <img
          class="section__img"
          src="https://www.aumsu.ru/images/news/03.2021/12.jpg"
          alt=""
        />
      </div>
      <div class="self-center w-56 h-48 xl:h-64 section__container-img">
        <img
          class="section__img"
          src="https://www.aumsu.ru/images/news/08.2020/11.jpg"
          alt=""
        />
      </div>
      <div class="self-center h-44 w-80 -ml-16 section__container-img">
        <img
          class="section__img"
          src="https://www.aumsu.ru/images/news/12.2020/35.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  @apply cursor-pointer;
}
.section__img {
  width: 100%;
  height: 100%;
  @apply object-cover;
  @apply object-center;
}
.section__container-img {
  transition: all 0.3s linear;
}
.section__title {
  @apply text-3xl;
  @apply text-white;
  @apply invisible;
}
.section:hover .section__container-img {
  transition: all 0.3s linear;
  @apply h-64;
  @apply w-2/6;
  @apply my-0;
  @apply mx-1;
}
.section:hover .section__title-wraper {
  @apply bg-primary;
  @apply opacity-80;
}
.section:hover .section__title {
  @apply visible;
  @apply underline;
}
</style>
