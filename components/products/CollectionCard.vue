<script setup>
const props = defineProps({
  collection: {
    type: Object,
    required: true,
  },
});

function getGridClass(index) {
  const gridClasses = [
    "row-span-4",
    "row-span-3",
    "row-span-4 col-start-2 row-start-4",
    "row-span-3 col-start-1 row-start-5",
    "row-span-4 col-start-3 row-start-1",
    "row-span-3 col-start-3 row-start-5",
  ];
  return gridClasses[index] || "row-span-3";
}
</script>

<template>
  <div
    class="h-96 flex flex-col gap-4 relative z-20 rounded-lg border border-green-400 bg-gradient-to-br from-green-200 via-green-100 to-green-50 shadow-lg p-4 hover:scale-105 transition-transform duration-300"
  >
    <div class="grid grid-cols-3 grid-rows-7 gap-4 h-[80%]">
      <div
        v-for="(product, index) in collection.products.slice(0, 6)"
        :key="product.id"
        :class="getGridClass(index)"
        class="overflow-hidden rounded-xl"
      >
        <img
          :src="useRuntimeConfig().public.storageUrl + product.images?.[0]"
          alt=""
          class="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    <div class="text-center">
      <span class="text-2xl font-bold text-green-600">{{
        collection.name
      }}</span>
    </div>
  </div>
</template>
