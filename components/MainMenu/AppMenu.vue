<template>
  <div class="relative">
    <nav class="flex p-4 font-normal sticky shadow-xl">
      <button
        v-for="item in menu"
        :key="item"
        class="p-2"
        @click="isActive = !isActive"
      >
        {{ item.title }}
      </button>
    </nav>
    <div
      class="bg-gray-200 h-auto p-4 w-full"
      :class="{ hidden: !isActive }"
      style="position: absolute; left: 0; bottom: -50px"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
        possimus quod laudantium quaerat optio similique blanditiis,
        voluptatibus nobis. Ratione ad ipsa placeat fugit dicta consectetur
        alias? Maxime, suscipit voluptates?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      menu: [
        {
          link: '/',
          title: 'Пункт 1555',
        },
        {
          link: '/',
          title: 'Пункт 15d55',
        },
      ],
    }
  },
  methods: {
    open() {},
  },
}
</script>
