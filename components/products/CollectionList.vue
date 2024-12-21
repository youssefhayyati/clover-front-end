<script setup>
const collections = ref([]);
const isLoading = ref(false);
const error = ref(null);

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
      throw new Error(
        fetchError.value.message || "Failed to fetch collections"
      );
    }

    if (data.value) {
      collections.value = data.value.data;
      pagination.value = {
        total: data.value.meta.total,
        per_page: data.value.meta.per_page,
        current_page: data.value.meta.page,
        last_page: data.value.meta.last_page,
      };
    }
  } catch (err) {
    console.error("Failed to fetch collections:", err);
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
  <div class="collection-list-container">
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="loader"></div>
    </div>

    <div v-else-if="error" class="error-message text-center p-10">
      <p class="text-red-500 mb-4">An error occurred 😕</p>
      <button
        @click="fetchCollections"
        class="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
      >
        Retry Fetching Collections
      </button>
    </div>

    <template v-else-if="collections.length">
      <div class="flex flex-wrap justify-center w-full gap-4 md:px-24 mt-10">
        <ProductsCollectionCard
          v-for="collection in collections"
          :key="collection.id"
          :collection="collection"
          class="sm:w-[90%] s:w-[45%] lg:w-[32%] xl:w-[32%]"
        />
      </div>
    </template>

    <div v-else class="flex justify-center items-center h-64">
      <p class="text-gray-500">No collections found</p>
    </div>
  </div>
</template>
