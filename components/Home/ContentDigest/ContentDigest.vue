<template>
  <div class="mt-2 md:mt-10 bg-access">
    <div class="container py-5">
      <div
        class="grid gap-1 lg:gap-0 sm:grid-flow-row sm:grid-cols-2 lg:grid-flow-col auto-cols-fr grid-rows-4"
      >
        <div
          v-for="itm in section"
          :key="itm"
          class="flex flex-col justify-end p-5 h-56 2xl:h-72 transform hover:-translate-y-2 cursor-pointer hover:shadow-2xl transition duration-300 ease-linear realative z-20"
        >
          <div
            class="absolute inset-0 z-20"
            :style="'background-color:' + 'rgb(0, 136, 204, 0.6)'"
          ></div>
          <img
            :src="itm.img"
            alt=""
            class="w-full h-full absolute inset-0 object-cover z-10"
          />
          <div class="z-20">
            <span class="text-4xl text-white">{{ itm.title }}</span>
          </div>
        </div>
        <div
          class="bg-red-300 flex justify-center items-center lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:-ml-24 lg:-mb-24 lg:-mt-10"
        >
          <div class="">1</div>
        </div>
        <div
          class="bg-green-300 flex justify-center items-center lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-2"
        >
          <div class="">1</div>
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
          img:
            'https://lh3.googleusercontent.com/proxy/G1gCAxRqsMSgQp1nVQgtLxXO1Mw6z-C_j4NjGVayC8zElXur6oCwjQmLB1a9yX9YTJ-H2qqu2eHiyCvWLl8r9Etsvii1JsRd87nNBHF4ZqZGFsMl974ZCInfcvC_ZcYNMihNko2tfVqRsNZCM4jYYe3mqBjWvzWT94jjvwBh',
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
          img:
            'https://lh3.googleusercontent.com/proxy/aBYWcuv4FFae4-zKZ9__wFT9s-zxpbTbzpjN0MaAErZcWTRKubD_FqBHPD7EW7UT2AcCplh25oCpN9VCJj7Hh8V4qgisicp6ilPENcbVyFSz8uhayATihSLGn10XUGQRIj2E',
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
