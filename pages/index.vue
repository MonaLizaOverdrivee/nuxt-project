<template>
  <div>
    <SliderSection v-if="!$store.getters['lowVision/lowVisionState']" />
    <AddmissFaculSection />
    <ContentDigest />
    <NewsSection />
  </div>
</template>

<script>
import SliderSection from '@/components/Home/Slider/SliderSection'
import AddmissFaculSection from '@/components/Home/AddmissionsAndFaculties/CommonBlock'
import ContentDigest from '@/components/Home/ContentDigest/ContentDigest'
import NewsSection from '@/components/Home/News/NewsSection'

export default {
  components: {
    SliderSection,
    AddmissFaculSection,
    ContentDigest,
    NewsSection,
  },
}
</script>

<style></style>
