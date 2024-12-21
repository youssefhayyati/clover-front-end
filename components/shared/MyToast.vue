<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="rounded p-4 absolute top-32 right-8 z-50 flex items-center justify-between bg-green-600 text-white"
  >
    <div class="flex flex-col justify-start items-start gap-2">
      <p v-if="props.message" class="font-light">{{ props.message }}</p>
    </div>
    <button @click="close()" class="absolute top-2 right-2">
      <Icon name="close" class="text-md !text-white" />
    </button>
  </div>
</template>
