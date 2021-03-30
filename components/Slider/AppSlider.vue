<template>
  <div class="pt-2 md:pt-10">
    <div class="flex container flex-col-reverse md:flex-row">
      <div
        class="xl:h-96 md:mt-20 md:w-3/5 xl:w-3/6 2xl:w-2/5 bg-primary z-10 flex flex-col p-6"
      >
        <transition :name="animatedSlide" mode="out-in">
          <h1
            :key="news[selectedNewsIndex].title"
            class="text-white text-xl md:text-2xl lg:text-4xl"
          >
            {{ news[selectedNewsIndex].title }}
          </h1>
        </transition>
        <div class="sm:my-2">
          <transition :name="animatedSlide" mode="out-in">
            <i :key="Math.random()" class="text-white text-sm">{{
              new Date().toLocaleString()
            }}</i>
          </transition>
        </div>
        <div class="hidden sm:block">
          <transition :name="animatedSlide" mode="out-in">
            <p :key="news[selectedNewsIndex].text" class="text-white">
              {{ textSlide }}
            </p>
          </transition>
        </div>
        <div class="py-2">
          <button
            class="border p-2 text-white hover:bg-white hover:text-primary font-middle"
          >
            Читать дальше
          </button>
        </div>
        <div class="flex flex-auto mt-4 sm:mt-0">
          <div class="flex items-center flex-auto justify-between self-end">
            <font-awesome-icon
              icon="chevron-left"
              class="text-white cursor-pointer"
              @click="clickPrev"
            />
            <div>
              <input
                v-for="(_, idx) in news.length"
                :id="'news_' + idx"
                :key="'mark_' + idx"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                :value="idx"
                class="mx-1"
              />
            </div>
            <font-awesome-icon
              icon="chevron-right"
              class="text-white cursor-pointer"
              @click="clickNext"
            />
          </div>
        </div>
      </div>
      <div class="h-56 md:h-96 flex-auto md:-ml-64 md:w-11/12">
        <transition :name="animatedSlide" mode="out-in">
          <img
            :key="news[selectedNewsIndex].img"
            :src="news[selectedNewsIndex].img"
            class="object-cover object-bottom w-full h-full z-0"
            alt=""
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import news from '../../store/mock/news'

export default {
  data() {
    return {
      selectedNewsIndex: 0,
      news,
      animatedSlide: null,
    }
  },
  computed: {
    textSlide() {
      return news[this.selectedNewsIndex].text.slice(0, 270) + '...'
    },
  },
  watch: {
    selectedNewsIndex(value, oldValue) {
      this.animatedSlide = value > oldValue ? 'animated-right' : 'animated-left'
    },
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.clickNext, 9000)
    })
  },
  methods: {
    clickPrev() {
      if (this.selectedNewsIndex > 0) {
        this.selectedNewsIndex--
      } else {
        this.selectedNewsIndex = this.news.length - 1
      }
    },
    clickNext() {
      if (this.selectedNewsIndex < this.news.length - 1) {
        this.selectedNewsIndex++
      } else {
        this.selectedNewsIndex = 0
      }
    },
  },
}
</script>

<style scoped>
.animated-left-enter-active,
.animated-right-enter-active {
  transition: all 0.8s ease;
}
.animated-left-leave-active,
.animated-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.animated-left-enter,
.animated-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.animated-left-leave-to,
.animated-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
