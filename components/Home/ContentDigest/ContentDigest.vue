<template>
  <div class="mt-2 md:mt-10 bg-blue-100 bg-access">
    <div class="container py-5">
      <div
        class="grid gap-1 lg:gap-0 sm:grid-flow-row sm:grid-cols-2 lg:grid-flow-col auto-cols-fr grid-rows-4"
      >
        <div
          v-for="itm in section"
          :key="itm"
          class="flex flex-col justify-end p-5 h-56 2xl:h-72 transform hover:-translate-y-2 cursor-pointer hover:shadow-2xl transition duration-300 ease-linear realative z-20 bg-access"
          :class="{
            'border border-access': $store.getters['lowVision/lowVisionState'],
          }"
        >
          <div
            v-if="!$store.getters['lowVision/lowVisionState']"
            class="absolute inset-0 z-20"
            :style="'background-color:' + 'rgb(0, 136, 204, 0.6)'"
          ></div>
          <img
            v-if="!$store.getters['lowVision/lowVisionState']"
            :src="itm.img"
            class="w-full h-full absolute inset-0 object-cover z-10"
            alt=""
          />
          <div class="z-20">
            <span class="text-4xl text-white text-access">{{ itm.title }}</span>
          </div>
        </div>
        <div
          class="flex items-center justify-center lg:col-start-3 lg:col-span-2 lg:row-span-2 bg-access"
        >
          <div class="w-3/6">
            <span class="py-2.5 text-4xl text-access">Объявления</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium beatae natus vero neque officiis esse adipisci minima
              reiciendis voluptatibus corporis amet, saepe aliquid culpa labore
              doloremque nisi, doloribus nam quos.
            </p>
          </div>
        </div>
        <div
          class="bg-blue-100 flex justify-center lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-2 bg-access"
        >
          <div class="w-3/6 flex items-center justify-center">
            <div>
              <span class="py-2.5 text-4xl text-access">Военная кафедра</span>
              <p>
                Реализация программ военной подготовки офицеров, сержантов
                (старшин), солдат (матросов) запаса на военных кафедрах по
                военно-учётным специальностям; участие в проведении
                воспитательной работы и работы по военно-профессиональной
                ориентации курсантов Университета.
              </p>
              <div class="">
                <button
                  class="border border-primary p-2 text-primary hover:bg-primary hover:text-white font-middle transition-all mt-2.5 border-access bg-access text-access"
                >
                  Плавсостав
                </button>
                <button
                  class="border border-primary p-2 text-primary hover:bg-primary hover:text-white font-middle transition-all mt-2.5 border-access bg-access text-access"
                >
                  Наземные специальности
                </button>
              </div>
            </div>
          </div>
          <div v-if="!$store.getters['lowVision/lowVisionState']" class="w-3/6">
            <img
              src="https://www.aumsu.ru/images/banners/Main_page/obr_img.png"
              alt=""
              class="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section: [
        {
          title: 'Виртуальный тур',
          url: '',
          img: 'https://www.colorhexa.com/0088cc.png',
        },
        {
          title: 'Информация о ректоре',
          url: '',
          img: 'https://www.aumsu.ru/images/banners/Main_page/rector51.jpg',
        },
        {
          title: 'План мероприятий',
          url: '',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTZFUXDEJvO9hQ3Z60aI0aG_6y80QCHx8rA&usqp=CAU',
        },
        {
          title: 'Фонд развития',
          url: '',
          img: 'https://www.colorhexa.com/0088cc.png',
        },
        {
          title: 'Раздел для лиц с ОВЗ',
          url: '',
          img: 'https://www.colorhexa.com/0088cc.png',
        },
        {
          title: 'e-University',
          url: '',
          img:
            'http://euniversity.aumsu.ru/templates/pawcreative/images/backgrounds/r1-s4-6.jpg',
        },
        {
          title: 'Учебное судно "Херсонес"',
          url: '',
          img: 'https://www.aumsu.ru/images/banners/l-198772.jpg',
        },
        {
          title: 'Фотогоазета',
          url: '',
          img: 'http://www.aumsu.ru/images/MO/fotogazeta/fotogaz_wap_mini.jpg',
        },
      ],
    }
  },
  methods: {
    numberColor() {
      return Math.round(Math.random() * 120)
    },
    randomColor() {
      return `rgb(${this.numberColor()}, ${this.numberColor()}, ${this.numberColor()}, 0.7)`
    },
  },
}
</script>

<style></style>
