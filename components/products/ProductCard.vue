<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["addToFav"]);
</script>

<template>
  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
    <a href="#">
      <div class="relative flex items-end rounded-xl h-[280px] overflow-hidden">
        <img
          :src="useRuntimeConfig().public.storageUrl + product.images?.[0]"
          :alt="`Image of ${product.title}`"
          class="w-full h-80 object-cover"
        />
        <div
          class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-slate-400 ml-1 text-sm">4.9</span>
        </div>
      </div>

      <div class="mt-1 p-2 flex flex-col justify-between items-start">
        <h2 class="text-slate-700">
          {{
            product.title.length > 50
              ? product.title.slice(0, 50) + "..."
              : product.title
          }}
        </h2>
        <p class="text-slate-400 mt-1 text-sm">
          {{ product.quantity > 0 ? "In Stock" : "Out of Stock" }}
        </p>

        <div class="mt-3 flex items-end justify-between w-full">
          <p>
            <span class="text-lg font-bold text-green-500"
              >{{ product.price }}DH</span
            >
          </p>

          <div class="flex items-center gap-2">
            <div
              class="group inline-flex rounded-xl bg-green-100 p-2 hover:bg-green-200 cursor-pointer"
              @click="$emit('addToFav', product)"
            >
              <Icon name="heart" class="text-xl" />
            </div>
            <nuxt-link
              :to="`/product/${product.id}`"
              class="group inline-flex rounded-xl bg-green-100 p-2 hover:bg-green-200"
            >
              <Icon name="eye" class="text-xl" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>
