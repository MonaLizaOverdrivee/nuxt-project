<template>
  <div class="mt-2 md:mt-10 bg-primary bg-access">
    <div class="container py-5">
      <div class="grid grid-flow-col auto-cols-fr grid-rows-4">
        <div
          v-for="itm in section"
          :key="itm"
          class="border flex flex-col justify-end p-5 h-72 transform hover:-translate-y-2 cursor-pointer hover:shadow-2xl transition duration-300 ease-linear bg-primary"
        >
          <div>
            <span class="text-4xl text-white">{{ itm }}</span>
          </div>
        </div>
        <div
          class="bg-red-300 flex-auto col-start-3 col-span-2 row-span-2 -ml-24 -mb-24 -mt-10"
        ></div>
        <div
          class="bg-green-300 flex-auto p-10 col-start-1 col-span-2 row-start-3 row-span-2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section: [
        'Виртуальный тур',
        'Информация о ректоре',
        'План мероприятий',
        'Фонд развития',
        'Раздел для лиц с ОВЗ',
        'e-University',
        'Учебное судно "Херсонес"',
        'Фотогоазета',
      ],
    }
  },
}
</script>

<style></style>
