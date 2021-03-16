<template>
  <div class="sticky top-0 bg-white">
    <nav class="p-4 font-normal shadow-xl">
      <div class="hidden lg:flex">
        <button
          v-for="(item, idx) in mainMenu"
          :key="idx"
          class="p-2 mx-2 focus:outline-none rounded-md hover:text-gray-600"
          :class="{ active: idx === indexItem }"
          @click="onClickMenu(idx, item)"
        >
          {{ item.name }}
        </button>
      </div>
      <svg
        class="h-6 w-6 ml-auto lg:hidden"
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
        class="bg-white h-auto p-4 w-full absolute top-0 left-0 grid grid-rows-6 grid-flow-col auto-cols-fr gap-1 border-t-2 border-blue-600 shadow-xl"
        :class="{ hidden: !isActive }"
      >
        <div class="p-1 border-red-800 border-2 col-span-3">
          <nuxt-link to="/">
            <span class="text-blue-600 font-medium">Перейти к разделу</span>
          </nuxt-link>
        </div>
        <div
          v-for="itm in selectedItemMenu.subMenuList"
          :key="itm"
          class="p-1 pl-3"
        >
          <nuxt-link to="/">
            <span class="underline text-blue-600">{{ itm.name }}</span>
          </nuxt-link>
        </div>
        <div
          class="p-1 border-red-800 border-2 row-start-2 row-end-7 flex flex-col"
        >
          <div
            v-for="itm in 3"
            :key="itm"
            class="flex-auto mt-1 rounded-xl bg-blue-100"
          >
            1
          </div>
        </div>
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
export default {
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
  @apply bg-blue-600 text-white;
}
</style>
