<script setup>
const props = defineProps({
  type: String,
});

const currentPage = ref(1);
const products = ref([]);
const isLoading = ref(false);
const error = ref(null);
const pagination = ref({
  total: 0,
  per_page: 0,
  current_page: 1,
  last_page: 0,
});

// Fetch products with error handling
const fetchProducts = async (type = "") => {
  isLoading.value = true;
  error.value = null;

  try {
    const { data, error: fetchError } = await useFetch(
      `${useRuntimeConfig().public.backendUrl}products?type=${type}`,
      {
        method: "GET",
        params: {
          page: currentPage.value,
        },
      }
    );

    if (fetchError.value) {
      throw new Error(fetchError.value.message || "Failed to fetch products");
    }

    if (data.value) {
      products.value = data.value.data;
      pagination.value = {
        total: data.value.meta.total,
        per_page: data.value.meta.per_page,
        current_page: data.value.meta.page,
        last_page: data.value.meta.last_page,
      };
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : "An unknown error occurred";
    console.error("Failed to fetch products:", err);
  } finally {
    isLoading.value = false;
  }
};

// Page change methods
const changePage = (page) => {
  if (page >= 1 && page <= pagination.value.last_page) {
    currentPage.value = page;
    fetchProducts();
  }
};

const nextPage = () => {
  if (currentPage.value < pagination.value.last_page) {
    currentPage.value += 1;
    fetchProducts();
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    fetchProducts();
  }
};

watch(
  () => props.type,
  () => {
    console.log(props.type);

    fetchProducts(props.type);
  }
);

onMounted(async () => {
  await nextTick();
  fetchProducts();
});
</script>

<template>
  <div class="product-list-container">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="loader"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-message text-center p-10">
      <p class="text-red-500 mb-4">An error occurred 😕</p>
      <button
        @click="fetchProducts"
        class="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
      >
        Retry Fetching Products
      </button>
    </div>

    <!-- Products Grid -->
    <template v-else-if="products.length">
      <div class="flex flex-wrap justify-center w-full gap-4 md:px-24 mt-10">
        <ProductsProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="sm:w-[90%] s:w-[45%] lg:w-[32%] xl:w-[32%]"
        />
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center items-center mt-10 space-x-2">
        <!-- Previous Page Button -->
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="pagination-button"
        >
          <Icon name="arrow-left" class="text-xl"></Icon>
        </button>

        <!-- Page Number Buttons -->
        <button
          v-for="page in pagination.last_page"
          :key="page"
          @click="changePage(page)"
          :class="[
            'px-4 py-2 rounded-lg',
            {
              'bg-green-500 text-white': currentPage === page,
              'bg-gray-200': currentPage !== page,
            },
          ]"
        >
          {{ page }}
        </button>

        <!-- Next Page Button -->
        <button
          @click="nextPage"
          :disabled="currentPage === pagination.last_page"
          class="pagination-button"
        >
          <Icon name="arrow-right" class="text-xl"></Icon>
        </button>
      </div>
    </template>

    <!-- Empty State -->
    <div v-else class="flex justify-center items-center h-64">
      <p class="text-gray-500">No products found</p>
    </div>
  </div>
</template>

<style scoped>
.pagination-button {
  @apply px-2 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:opacity-50 rounded-lg flex justify-center items-center gap-1;
}

.loader {
  @apply animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500;
}
</style>
