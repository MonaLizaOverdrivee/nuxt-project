<template>
  <div class="mt-2 md:mt-10 py-2">
    <div class="container">
      <div
        class="flex"
        :class="{
          'sm:grid grid-rows-3 grid-cols-4 gap-3 overflow-x-scroll sm:overflow-x-auto': !$store
            .getters['lowVision/lowVisionState'],
          'flex-col': $store.getters['lowVision/lowVisionState'],
        }"
      >
        <article
          v-for="(itm, idx) in newsArr"
          :key="itm"
          class="px-5 border-l-4 cursor-pointer"
          :class="{
            'border-blue-300 w-80 sm:w-auto flex-shrink-0 flex-grow-1 h-40 lg:h-56 2xl:h-72 flex flex-col hover:border-primary transition duration-300': !$store
              .getters['lowVision/lowVisionState'],
            'mb-5 border-access': $store.getters['lowVision/lowVisionState'],
          }"
          @mouseout="hoveredArticleIndex = null"
          @mouseover="hoveredArticleIndex = idx"
        >
          <div>
            <span class="font-bold">{{ itm.title }}</span>
          </div>
          <div class="flex-auto">
            <p>
              {{ itm.text }}
            </p>
          </div>
          <div class="flex justify-between">
            <div>
              <b
                >{{ new Date().getDate() }}.{{ new Date().getMonth() + 1 }}.{{
                  new Date().getFullYear()
                }}</b
              >
            </div>
            <div
              v-if="
                hoveredArticleIndex === idx &&
                !$store.getters['lowVision/lowVisionState']
              "
            >
              <font-awesome-icon
                icon="long-arrow-alt-right"
                size="lg"
                class="news__arrow text-primary"
              />
            </div>
          </div>
        </article>
        <div
          class="col-start-1 col-span-3 row-start-2 row-span-2 flex flex-col justify-end p-5 text-white order-first cursor-pointer relative"
          :class="{
            'border-l-4 border-access mb-5':
              $store.getters['lowVision/lowVisionState'],
          }"
        >
          <div
            v-if="!$store.getters['lowVision/lowVisionState']"
            class="absolute inset-0 overflow-hidden"
          >
            <img
              src="https://www.aumsu.ru/images/news/04.2021/11.jpg"
              alt=""
              class="w-full h-full absolute inset-0 object-cover object-top transform hover:scale-125 transition duration-500 z-10"
            />
          </div>
          <div class="z-20">
            <div>
              <span class="text-4xl font-medium text-access">Some title</span>
            </div>
            <div>
              <p class="text-base text-access">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate nesciunt tempore, impedit ex reprehenderit omnis aut,
                accusantium ratione nemo quia quibusdam magnam ipsam! Tenetur
                voluptatem deleniti eius magni, sit perspiciatis!
              </p>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="/" class="underline text-primary font-medium text-access"
        >Все новости</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredArticleIndex: null,
      newsArr: [
        {
          title: 'Ура! Премьера!',
          url: '/',
          id: '',
          text:
            'В стенах актового зала Ушаковки 8 апреля состоялась долгожданная премьера сезона, первый спектакль нашего молодежного театра, который был поставлен по мотивам романа Джерома Дэвида Сэлинджера «Над пропастью во ржи».',
        },
        {
          title: 'Вакцинация курсантов',
          url: '/',
          id: '',
          text:
            'В Ушаковке началась вакцинация курсантов, которым предстоит участвовать в Параде Победы на 9 мая. Это решение было принято руководством университета, чтобы максимально защитить и обезопасить ребят, предпринять все возможные меры профилактики, в условиях, когда карантин полностью не отменен, это весьма актуально.',
        },
        {
          title: '«Brainstorm: THE BEST CREW- 2021».',
          url: '/',
          id: '',
          text:
            'Морской колледж 1 апреля пригласил лучших из лучших на «Мозговой штурм». Именно так называлась интеллектуальная игра, собравшая 8 команд, участниками которых стали, в основном, первокурсники. Но главной особенностью игры, был тот факт, что проходила она на английском языке.',
        },
        {
          title: 'Производственная практика на предприятиях ООО «Аэродинамика',
          url: '/',
          id: '',
          text:
            'Более 70 курсантов университета и Транспортного колледжа будут проходить летнюю производственную практику на предприятиях ООО «Аэродинамика». 5 апреля состоялась встреча представителей компании с будущими практикантами.',
        },
        {
          title: 'Фестиваль орнитологов',
          url: '/',
          id: '',
          text:
            'Ушаковка поддержала инициативу Русского географического общества и выступила одним из организаторов Межрегионального орнитологического фестиваля, который проходит в',
        },
        {
          title: 'Всероссийская студенческая олимпиада',
          url: '/',
          id: '',
          text:
            'Ушаковцы стали финалистами Всероссийской студенческой олимпиады по специальности «Таможенное дело». Интеллектуальное состязание проходило в Ростовском филиале Российской таможенной академии.',
        },
      ],
    }
  },
  computed: {
    lustNews() {
      return ' background-image: url(https://www.aumsu.ru/images/news/04.2021/11.jpg);background-size: cover;'
    },
  },
}
</script>

<style scoped>
.news__arrow {
  animation-duration: 1s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes slidein {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(10px);
  }
}
</style>
