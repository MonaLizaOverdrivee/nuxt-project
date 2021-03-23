<template>
  <div class="sticky top-0 bg-white">
    <nav class="p-4 font-normal shadow-xl">
      <div class="hidden lg:flex">
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
      <svg
        class="h-6 w-6 ml-auto lg:hidden hover:bg-gray-100 rounded"
        x-description="Heroicon name: outline/menu"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="burgerIcon"
        ></path>
      </svg>
    </nav>
    <div class="relative">
      <div
        :class="[
          'bg-white h-auto p-4 w-full absolute top-0 left-0 grid grid-rows-6-auto grid-flow-col auto-cols-fr gap-1 border-t-2 border-primary shadow-xl',
          { hidden: !isActive },
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
          <svg
            class="h-6 w-6 cursor-pointer hover:bg-gray-100 rounded"
            x-description="Heroicon name: outline/menu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            @click="close"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div
          v-for="(itm, idx) in selectedItemMenu.subMenuList"
          :key="idx"
          class="p-1 pl-3"
        >
          <nuxt-link to="/">
            <span class="underline text-primary">{{ itm.title }}</span>
          </nuxt-link>
        </div>
        <component
          :is="'Section' + (indexItem + 1)"
          :items-data="selectedItemMenu.subMenuBtn"
        />
      </div>
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-0 left-0 bg-gray-200 p-4"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, et. Ab
          est vero dignissimos facere aliquid saepe. Amet molestiae cumque
          voluptatibus delectus, natus molestias sunt, ad, soluta perspiciatis
          iusto harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab fuga quos eaque quibusdam rerum vitae. Amet, culpa, modi dolorum,
          dolor voluptatum maxime est consequatur vitae iste voluptatibus
          suscipit laudantium soluta.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mainMenu from '../../store/mock/mainMenu'
import Section1 from './MenuItemSectionBtn/ItemSection1'
import Section2 from './MenuItemSectionBtn/ItemSection2'
import Section3 from './MenuItemSectionBtn/ItemSection3'
import Section4 from './MenuItemSectionBtn/ItemSection4'
import Section5 from './MenuItemSectionBtn/ItemSection5'
import Section6 from './MenuItemSectionBtn/ItemSection6'
export default {
  components: { Section1, Section2, Section3, Section4, Section5, Section6 },
  data() {
    return {
      indexItem: null,
      isActive: false,
      mobileMenuOpen: false,
      selectedItemMenu: {},
      mainMenu,
    }
  },
  computed: {
    burgerIcon() {
      return this.mobileMenuOpen
        ? 'M6 18L18 6M6 6l12 12'
        : 'M4 6h16M4 12h16M4 18h16'
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
</style>
