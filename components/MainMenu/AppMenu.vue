<template>
  <div class="sticky">
    <nav class="p-4 font-normal shadow-xl">
      <div class="hidden lg:flex">
        <button
          v-for="(item, idx) in menu"
          :key="idx"
          class="p-2 mx-2 focus:outline-none rounded-md"
          :class="{ active: idx === indexItem }"
          @click="onClickMenu(idx, item)"
        >
          {{ item.title }}
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
        class="bg-gray-200 h-auto p-4 w-full"
        :class="{ hidden: !isActive }"
        style="position: absolute; left: 0; top: 0"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
          possimus quod laudantium quaerat optio similique blanditiis,
          voluptatibus nobis. Ratione ad ipsa placeat fugit dicta consectetur
          alias? Maxime, suscipit voluptates?
          {{ selectedItemMenu }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexItem: null,
      isActive: false,
      mobileMenuOpen: false,
      selectedItemMenu: {},
      menu: [
        {
          link: '/',
          title: 'Об университете',
        },
        {
          link: '/',
          title: 'Образование',
        },
        {
          link: '/',
          title: 'Международная деятельность',
        },
        {
          link: '/',
          title: 'Наука',
        },
        {
          link: '/',
          title: 'Культура и спорт',
        },
        {
          link: '/',
          title: 'Контакты',
        },
      ],
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
