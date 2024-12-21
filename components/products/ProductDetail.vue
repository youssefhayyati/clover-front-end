<script setup>
import { useCartStore } from "@/stores/cartStore";
import { ProductSuggestions, ProductImageSlider } from "@/components";
const cart = useCartStore();
const product = ref({});
const quantity = ref(1);
const selectedSize = ref(null);
const selectedColor = ref(null);
const isLoading = ref(false);
const error = ref(null);
const route = useRoute();

const fetchProduct = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const { data, error: fetchError } = await useFetch(
      `${useRuntimeConfig().public.backendUrl}products/${route.params.id}`,
      {
        method: "GET",
      }
    );

    if (fetchError.value) {
      throw new Error(fetchError.value.message || "Failed to fetch products");
    }

    if (data.value) {
      product.value = data.value.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function toggleFavorite() {
  console.log("fav", product.value.isFavorite);

  product.value.isFavorite = !product.value.isFavorite;
}

const addToCart = () => {
  console.log("add to cart");
  cart.addProduct(
    product.value,
    quantity.value,
    selectedSize.value,
    selectedColor.value
  );
};

onMounted(async () => {
  await nextTick();
  fetchProduct();
  cart.initializeCart();
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 w-[80%] mx-auto"
  >
    <ProductImageSlider class="w-full md:w-[40%]" :images="product.images" />

    <div
      class="flex flex-col gap-8 w-full md:w-[40%] h-auto md:h-[550px] justify-between"
    >
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div class="flex flex-col gap-4 w-full overflow-hidden">
            <p class="text-xl md:text-4xl font-medium text-slate-700 truncate">
              {{ product.title }}
            </p>
            <p class="text-xl text-slate-700">{{ product.price }}DH</p>
          </div>
          <Icon
            name="heart"
            :class="[
              'text-xl md:text-2xl !text-slate-700 sm:mt-2 md:mt-3 cursor-pointer',
              {
                '!stroke-red-500 animate-ping': product.isFavorite,
              },
            ]"
            @click="toggleFavorite"
          >
          </Icon>
        </div>
        <div>
          <p class="text-sm md:text-md text-slate-700">
            {{ product.description }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <p class="text-sm md:text-xl text-slate-700">Size</p>
            <div class="flex flex-wrap gap-2 md:gap-4">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size.name"
                :class="[
                  'border/2 border-slate-400 text-sm md:text-md font-medium px-3 md:px-4 py-1 md:py-2 rounded shadow font-sans text-slate-700 uppercase',
                  selectedSize === size.name
                    ? 'ring-2 ring-green-500 shadow-lg ring-offset-2 bg-green-500 text-white'
                    : '',
                ]"
              >
                {{ size.name }}
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-sm md:text-xl text-slate-700">Color</p>
            <div class="flex flex-wrap gap-2 md:gap-4">
              <button
                v-for="color in product.colors"
                :key="color.id"
                :style="{ backgroundColor: color.hex_code }"
                @click="selectedColor = color.hex_code"
                :aria-label="color.label"
                :class="[
                  'border/2 border-slate-400 text-sm md:text-md font-medium p-3 md:p-4 rounded-full shadow font-sans',
                  selectedColor === color.hex_code
                    ? 'ring-2 ring-green-500 shadow-lg ring-offset-2'
                    : '',
                ]"
              ></button>
            </div>
          </div>
        </div>
        <div
          class="w-full flex sm:flex-col s:flex-row md:flex-row sm:justify-center justify-between items-center mt-auto"
        >
          <div
            class="flex items-center gap-4 md:mt-0 sm:w-full sm:justify-between s:justify-start"
          >
            <button
              @click="decreaseQuantity"
              class="flex items-center justify-center h-12 w-12 text-xl md:text-2xl text-white bg-green-500 rounded shadow font-sans"
            >
              <span class="w-full h-full flex justify-center items-center !mb-1"
                >-</span
              >
            </button>
            <div
              class="flex items-center p-4 text-xl md:text-2xl text-slate-700"
            >
              {{ quantity }}
            </div>
            <button
              @click="increaseQuantity"
              class="flex items-center justify-center h-12 w-12 text-xl md:text-2xl text-white bg-green-500 rounded shadow font-sans"
            >
              <span class="w-full h-full flex justify-center items-center !mb-1"
                >+</span
              >
            </button>
          </div>
          <button
            class="flex items-center justify-center gap-2 shadow bg-green-500 rounded w-2/3 sm:w-full h-12 !"
            @click="addToCart"
          >
            <Icon name="bag" class="text-xl md:text-2xl"></Icon>
            <p class="text-sm font-medium text-white cursor-pointer">
              ADD TO CART
            </p>
          </button>
        </div>
      </div>
    </div>
    <ProductSuggestions />
  </div>
</template>
