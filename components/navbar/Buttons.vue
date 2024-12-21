<script setup>
import { useCartStore } from "@/stores";
const cart = useCartStore();

onMounted(() => {
  cart.initializeCart();
});
</script>

<template>
  <div class="flex justify-end items-center gap-6 w-full">
    <input
      type="text"
      placeholder="Search"
      class="w-2/3 h-9 bg-white px-4 py-1 text-sm focus:outline-none border border-green-200 rounded-md text-slate-700 focus:ring-2 focus:ring-green-300"
    />
    <div class="flex justify-evenly items-center gap-4">
      <a
        href=""
        class="bg-green-400 rounded-md w-[37px] h-[37px] flex justify-center items-center"
      >
        <Icon name="heart" class="text-[18px] heart text-white"></Icon>
      </a>
      <div
        class="bg-green-400 rounded-md w-[37px] h-[37px] flex justify-center items-center relative"
      >
        <Icon name="bag" class="text-2xl"></Icon>
        <div
          v-if="cart.cartItemCount > 0"
          class="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex justify-center items-center"
        >
          <span class="text-xs text-white">{{ cart.cartItemCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heart svg {
  transform: translateY(1.5px);
}
</style>
