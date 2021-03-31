<template>
  <div class="flex flex-auto mt-4 sm:mt-0">
    <div class="flex items-center flex-auto justify-between self-end">
      <font-awesome-icon
        icon="chevron-left"
        class="text-white cursor-pointer"
        @click="clickPrev"
      />
      <div>
        <input
          v-for="index in listIndex"
          :id="'news_' + index"
          :key="'mark_' + index"
          type="radio"
          name="mark_news"
          :value="index - 1"
          @change="$emit('change', index - 1)"
        />
      </div>
      <font-awesome-icon
        icon="chevron-right"
        class="text-white cursor-pointer"
        @click="clickNext"
      />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    slidesIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickPrev() {
      if (this.modelValue > 0) {
        this.$emit('change', this.modelValue - 1)
      } else {
        this.$emit('change', this.slidesIndex - 1)
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

<style></style>
