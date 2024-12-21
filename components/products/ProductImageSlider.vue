<script setup>
defineProps({
  images: Array,
});
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :pagination="{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    }"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img
        :src="useRuntimeConfig().public.storageUrl + '/' + image"
        alt="image of medical scrub"
        class="w-full h-[550px] object-cover"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  position: relative;
}

.swiper-pagination-bullet {
  background: #ddd;
  width: 12px;
  height: 12px;
  opacity: 1;
  border-radius: 50%;
  margin: 0 5px;
}

.swiper-pagination-bullet-active {
  background: #007aff;
}
</style>
