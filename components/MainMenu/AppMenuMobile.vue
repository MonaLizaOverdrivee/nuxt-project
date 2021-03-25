<template>
  <div
    class="lg:hidden absolute top-0 right-0 bg-blue-100 p-4 w-full sm:w-2/5 mobileMenu h-screen overflow-scroll"
    :class="{ 'mobileMenu_is-open': mobileMenuVisible }"
  >
    <div class="flex flex-col">
      <div v-for="(itm, idx) in menu" :key="itm" class="flex-auto p-2">
        <span class="text-xl font-medium" @click="open(idx)">{{
          itm.title
        }}</span>
        <ul v-if="indexItem === idx" class="ml-2">
          <li v-for="sub in submenu(itm)" :key="sub" class="my-2 text-primary">
            <template v-if="itm.title === 'Контакты'">
              <div>
                <strong>{{ sub.title }}:</strong>
              </div>
              <div v-for="contact in sub.data" :key="contact">
                {{ contact }}
              </div>
            </template>
            <template v-else>
              <nuxt-link to="/">{{ sub.title }}</nuxt-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-2 border-2 border-red-600"></div>
  </div>
</template>

<script>
export default {
  props: {
    mobileMenuVisible: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      indexItem: null,
    }
  },
  // computed: {
  //   submenu() {
  //     return 2
  //   },
  // },
  methods: {
    submenu(itm) {
      return [...itm.subMenuList, ...itm.subMenuBtn]
    },
    open(idx) {
      this.indexItem = idx === this.indexItem ? null : idx
    },
  },
}
</script>

<style scoped>
.mobileMenu {
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s linear;
}
.mobileMenu_is-open {
  transform: scaleX(1);
}
</style>
