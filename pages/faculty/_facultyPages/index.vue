<template>
  <div>
    <div class="flex justify-center items-center faculty__header relative">
      <div
        class="absolute inset-0 z-20"
        style="background-color: rgb(0, 0, 0, 0.6)"
      ></div>
      <div class="absolute inset-0">
        <iframe
          class="object-cover z-10"
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/6qGiXY1SB68?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="z-20">
        <h1 class="text-white">{{ dataTest.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTest: {
        title: 'Судомеханический факультет',
        wallpapper: '',
      },
    }
  },
}
</script>

<style scoped>
.faculty__header {
  height: 50vh;
}
</style>
