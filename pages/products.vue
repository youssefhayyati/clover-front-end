<script setup>
import ProductList from "~/components/products/ProductList.vue";
import insta_profile from "@/assets/images/insta_profile.png";

const type = ref("");
const isLoading = ref(false);
const error = ref(null);
const collections = ref([]);

const fetchCollections = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const { data, error: fetchError } = await useFetch(
      `${useRuntimeConfig().public.backendUrl}collections`,
      {
        method: "GET",
      }
    );

    if (fetchError.value) {
      throw new Error(fetchError.value.message || "Failed to fetch products");
    }

    if (data.value) {
      collections.value = data.value.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await nextTick();
  fetchCollections();
});
</script>

<template>
  <div>
    <div class="w-full flex justify-center items-center p-4 md:px-24">
      <h1 class="sm:text-4xl md:text-7xl font-bold text-slate-800 mb-10">
        We have a wide range of products
      </h1>
    </div>
    <div class="w-full flex justify-between items-center p-4 md:px-24">
      <div class="flex gap-4 items-center">
        <button
          v-for="collection in collections"
          :key="collection?.id"
          :class="[
            'text-slate-700',
            type === collection?.name
              ? 'font-bold bg-green-500 text-white rounded text-sm px-4 py-1.5'
              : 'font-light',
          ]"
          @click="type = collection?.name"
        >
          {{ collection.name }}
        </button>
      </div>
      <button
        :class="[
          'text-slate-700',
          type === ''
            ? 'font-bold bg-green-500 text-white rounded text-sm px-4 py-1.5'
            : 'font-light',
        ]"
        @click="type = 'all'"
      >
        Show All
      </button>
    </div>
    <ProductList :type="type" />
    <div
      class="w-full flex flex-col justify-center items-center py-16 md:px-24 bg-slate-200 mt-10"
    >
      <h1 class="sm:text-2xl md:text-4xl font-bold text-slate-800 mb-10 mt-10">
        Follow products and discounts on Instagram
      </h1>
      <div class="flex justify-center items-center gap-2">
        <img
          :src="insta_profile"
          alt=""
          class="w-1/2 object-cover rounded-2xl"
        />
      </div>
      <h1 class="sm:text-2xl md:text-4xl font-bold text-slate-800 mb-10 mt-10">
        Or subscribe to the newsletter
      </h1>
      <div class="flex justify-center items-center gap-4 w-1/2">
        <input
          type="email"
          placeholder="Email"
          class="w-2/3 h-9 bg-white px-4 py-1 text-sm focus:outline-none border border-green-200 rounded-md text-slate-700 focus:ring-2 focus:ring-green-300"
        />
        <button
          type="button"
          class="text-white bg-green-400 hover:bg-green-500 rounded text-sm px-6 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="currentColor"
            class="mr-2 inline"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fill-rule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clip-rule="evenodd"
              data-original="#000000"
            />
          </svg>
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
