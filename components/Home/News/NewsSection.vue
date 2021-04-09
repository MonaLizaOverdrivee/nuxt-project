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
          v-for="(itm, idx) in 6"
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
          <div><span class="text-2xl font-medium">Some title</span></div>
          <div class="flex-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nesciunt tempore, impedit ex reprehenderit omnis aut, accusantium
              ratione nemo quia quibusdam magnam ipsam! Tenetur voluptatem
              deleniti eius magni, sit perspiciatis!
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
