<template>
  <div class="pt-10">
    <div class="flex container">
      <div
        class="xl:h-96 mt-20 w-3/5 xl:w-3/5 2xl:w-2/5 bg-primary z-10 flex flex-col p-6"
      >
        <transition :name="animatedSlide" mode="out-in">
          <h1 :key="news[selectedNewsIndex].title" class="text-white">
            {{ news[selectedNewsIndex].title }}
          </h1>
        </transition>
        <div class="my-2">
          <transition :name="animatedSlide" mode="out-in">
            <i :key="Math.random()" class="text-white text-sm">{{
              new Date().toLocaleString()
            }}</i>
          </transition>
        </div>
        <div>
          <transition :name="animatedSlide" mode="out-in">
            <p :key="news[selectedNewsIndex].text" class="text-white">
              {{ news[selectedNewsIndex].text }}
            </p>
          </transition>
        </div>
        <div>4</div>
        <div class="flex flex-auto">
          <div class="flex items-center flex-auto justify-between self-end">
            <font-awesome-icon
              icon="chevron-left"
              class="text-white cursor-pointer"
              @click="clickPrev"
            />
            <div>
              <input
                id="news_1"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                value="0"
              />
              <input
                id="news_2"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                value="1"
              />
              <input
                id="news_3"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                value="2"
              />
              <input
                id="news_4"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                value="3"
              />
              <input
                id="news_5"
                v-model="selectedNewsIndex"
                type="radio"
                name="mark_news"
                value="4"
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
      <div class="h-96 flex-auto -ml-64 w-11/12">
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
  watch: {
    selectedNewsIndex(value, oldValue) {
      this.animatedSlide = value > oldValue ? 'animated-right' : 'animated-left'
    },
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
