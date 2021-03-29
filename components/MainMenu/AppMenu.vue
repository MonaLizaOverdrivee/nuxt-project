<template>
  <div class="sticky top-0 bg-white z-50">
    <nav class="px-4 font-normal flex shadow-xl">
      <div class="h-10 lg:h-16 py-1 self-center">
        <img
          class="h-full"
          src="https://assets.vuzopoisk.ru/images/logo/1tgMsxa9.jpg"
          alt=""
        />
      </div>
      <div class="hidden lg:flex py-4">
        <button
          v-for="(item, idx) in mainMenu"
          :key="idx"
          class="p-2 mx-2 focus:outline-none rounded-md"
          :class="{ active: idx === indexItem }"
          @click="onClickMenu(idx, item)"
        >
          {{ item.title }}
        </button>
      </div>
      <font-awesome-icon
        :icon="burgerIcon"
        size="lg"
        class="self-center cursor-pointer hover:text-primary ml-auto lg:hidden"
        @click="mobileMenuVisible = !mobileMenuVisible"
      />
    </nav>
    <div class="relative">
      <div
        :class="[
          'invisible lg:visible bg-white h-auto p-4 w-full absolute top-0 left-0 grid grid-rows-6-auto grid-flow-col auto-cols-fr gap-1 border-t-2 border-primary shadow-xl menu__content',
          { 'is-open': isActive },
        ]"
      >
        <div
          class="p-1 flex justify-around"
          :class="'col-span-' + (Math.ceil(colInGrid / 5) + 1)"
        >
          <div class="flex-auto">
            <nuxt-link to="/">
              <span class="text-primary font-medium">Перейти к разделу</span>
            </nuxt-link>
          </div>
          <font-awesome-icon
            icon="times"
            size="lg"
            class="self-center cursor-pointer hover:text-primary"
            @click="close"
          />
        </div>
        <div
          v-for="(itm, idx) in selectedItemMenu.subMenuList"
          :key="idx"
          class="p-1 pl-3"
        >
          <nuxt-link to="/">
            <span class="underline text-primary hover:text-blue-300">{{
              itm.title
            }}</span>
          </nuxt-link>
        </div>
        <component
          :is="'Section' + (indexItem + 1)"
          :items-data="selectedItemMenu.subMenuBtn"
        />
      </div>
      <AppMenuMobile :mobileMenuVisible="mobileMenuVisible" :menu="mainMenu" />
    </div>
  </div>
</template>

<script>
import mainMenu from '../../store/mock/mainMenu'
import AppMenuMobile from './AppMenuMobile'
import Section1 from './MenuItemSectionBtn/ItemSection1'
import Section2 from './MenuItemSectionBtn/ItemSection2'
import Section3 from './MenuItemSectionBtn/ItemSection3'
import Section4 from './MenuItemSectionBtn/ItemSection4'
import Section5 from './MenuItemSectionBtn/ItemSection5'
import Section6 from './MenuItemSectionBtn/ItemSection6'
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    AppMenuMobile,
  },
  data() {
    return {
      indexItem: null,
      isActive: false,
      mobileMenuVisible: false,
      selectedItemMenu: {},
      mainMenu,
    }
  },
  computed: {
    burgerIcon() {
      return this.mobileMenuVisible ? 'times' : 'bars'
    },
    colInGrid() {
      return Object.keys(this.selectedItemMenu).length > 0
        ? this.selectedItemMenu.subMenuList.length
        : 0
    },
  },
  methods: {
    onClickMenu(i, itm) {
      this.indexItem === i ? this.close() : this.open(i, itm)
    },
    open(i, itm) {
      this.isActive = true
      this.indexItem = i
      this.selectedItemMenu = itm
    },
    close() {
      this.isActive = false
      this.indexItem = null
      this.selectedItemMenu = {}
    },
  },
}
</script>

<style>
.active {
  @apply bg-primary;
  @apply text-white;
}
.menu__content {
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.3s linear;
}
.is-open {
  transform: scaleY(1);
}
</style>
