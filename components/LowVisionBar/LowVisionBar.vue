<template>
  <div class="p-2 bg-access border-b-2 border-access">
    <div class="container flex justify-center">
      <div class="text-center mx-2">
        <span>Размер шрифта:</span>
        <span
          class="text-xl px-1 cursor-pointer"
          @click="
            $store.commit('lowVision/changeSizeClass', 'size-scheme--small')
          "
          >A</span
        >
        <span
          class="text-2xl px-1 cursor-pointer"
          @click="
            $store.commit('lowVision/changeSizeClass', 'size-scheme--medium')
          "
          >A</span
        >
        <span
          class="text-3xl px-1 cursor-pointer"
          @click="
            $store.commit('lowVision/changeSizeClass', 'size-scheme--large')
          "
          >A</span
        >
      </div>
      <div class="self-center flex items-center ml-3">
        <div><span>Цветовая палитра:</span></div>
        <div
          class="px-2 mx-1 bg-white text-black border cursor-pointer"
          @click="
            $store.commit('lowVision/changeColorClass', 'color-scheme--white')
          "
        >
          a
        </div>
        <div
          class="px-2 mx-1 bg-black text-white border border-white cursor-pointer"
          @click="
            $store.commit('lowVision/changeColorClass', 'color-scheme--black')
          "
        >
          a
        </div>
        <div
          class="px-2 mx-1 bg-yellow-900 text-green-300 border cursor-pointer"
          @click="
            $store.commit('lowVision/changeColorClass', 'color-scheme--brown')
          "
        >
          a
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
