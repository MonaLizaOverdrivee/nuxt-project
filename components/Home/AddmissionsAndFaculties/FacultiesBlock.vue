<template>
  <div
    class="border-2 md:w-3/6 p-5 md:ml-5 mt-2 md:mt-0 flex flex-col-reverse lg:flex-row border-access"
  >
    <div class="flex-auto mr-2.5">
      <input
        id="asd"
        v-model="search"
        type="text"
        name="фыв"
        placeholder="Факультеты, кафедры, направления подготовки"
        class="border-2 rounded w-full p-2 focus:outline-none focus:border-primary bg-access border-access"
      />
      <div class="mt-2.5 overflow-y-auto h-48">
        <div class="search__rezult-block bg-access border-access">
          <div>
            <nuxt-link
              to="/"
              class="text-xs font-medium text-primary hover:underline text-access"
              >Специальности</nuxt-link
            >
          </div>
          <span class="font-medium">Информационные системы и технологии</span>
          <i class="text-xs block">Предметы: русский, математика, английский</i>
        </div>
        <div class="search__rezult-block bg-access border-access">
          <div>
            <nuxt-link
              to="/"
              class="text-xs font-medium text-primary hover:underline text-access"
              >Факультеты</nuxt-link
            >
          </div>
          <span class="font-medium">Судомеханический факультет</span>
        </div>
        <div class="search__rezult-block bg-access border-access">
          <div>
            <nuxt-link
              to="/"
              class="text-xs font-medium text-primary hover:underline text-access"
              >Кафедры</nuxt-link
            >
          </div>
          <span class="font-medium">Высшая математика и физика</span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row justify-between md:justify-start md:flex-col ml-2.5 mb-2.5 md:mb-0"
    >
      <div class="facul__numbers">
        <div>
          <span class="text-primary text-xs sm:text-base">Выпусников</span>
        </div>
        <div><span class="text-2xl sm:text-4xl font-medium">4566</span></div>
      </div>
      <div class="facul__numbers">
        <div>
          <span class="text-primary text-xs sm:text-base">Абитуриентов</span>
        </div>
        <div><span class="text-2xl sm:text-4xl font-medium">7364</span></div>
      </div>
      <div class="facul__numbers">
        <div>
          <span class="text-primary text-xs sm:text-base">Трудоустроенно</span>
        </div>
        <div><span class="text-2xl sm:text-4xl font-medium">4566</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style scoped>
.facul__numbers + .facul__numbers {
  @apply md:mt-2;
}
.search__rezult-block + .search__rezult-block {
  @apply mt-2;
}
.search__rezult-block {
  @apply border;
  @apply border-transparent;
  @apply rounded;
  @apply bg-blue-100;
  @apply p-2;
  @apply cursor-pointer;
  @apply hover:bg-blue-300;
}
</style>
