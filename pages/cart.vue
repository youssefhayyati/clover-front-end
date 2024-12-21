<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-slate-700">Your Cart</h1>

    <div v-if="cart.items.length === 0" class="text-center py-16">
      <Icon name="bag" class="text-6xl text-slate-400 mx-auto mb-4"></Icon>
      <p class="text-xl text-slate-600">Your cart is empty</p>
      <nuxt-link
        to="/products"
        class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
      >
        Continue Shopping
      </nuxt-link>
    </div>

    <div v-else class="grid md:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="md:col-span-2 space-y-6">
        <div
          v-for="item in cart.items"
          :key="item.id + (item.size || '') + (item.color || '')"
          class="flex items-center bg-white shadow-md rounded-lg p-4"
        >
          <!-- Product Image -->
          <img
            :src="item.images[0]"
            :alt="item.title"
            class="w-24 h-24 object-cover rounded-md mr-6"
          />

          <!-- Product Details -->
          <div class="flex-grow">
            <h3 class="text-lg font-semibold text-slate-700">
              {{ item.title }}
            </h3>

            <div
              class="flex items-center space-x-4 text-sm text-slate-600 mt-2"
            >
              <p v-if="item.size">Size: {{ item.size }}</p>
              <p
                v-if="item.color"
                class="w-4 h-4 rounded-full"
                :style="{ backgroundColor: item.color }"
              ></p>
            </div>

            <div class="flex items-center mt-4">
              <!-- Quantity Controls -->
              <div class="flex items-center mr-4">
                <button
                  @click="decreaseQuantity(item)"
                  class="bg-green-500 text-white w-8 h-8 rounded"
                >
                  -
                </button>
                <span class="mx-4">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item)"
                  class="bg-green-500 text-white w-8 h-8 rounded"
                >
                  +
                </button>
              </div>

              <!-- Price -->
              <p class="ml-auto font-semibold text-slate-700">
                {{ (item.price * item.quantity).toFixed(2) }}DH
              </p>
            </div>
          </div>

          <!-- Remove Button -->
          <button
            @click="removeItem(item)"
            class="ml-4 text-red-500 hover:text-red-700"
          >
            <Icon name="trash" class="text-xl"></Icon>
          </button>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-white shadow-md rounded-lg p-6 h-fit">
        <h2 class="text-xl font-bold mb-4 text-slate-700">Order Summary</h2>

        <div class="space-y-4">
          <div class="flex justify-between">
            <span>Subtotal ({{ cart.cartItemCount }} items)</span>
            <span>{{ cart.cartTotal.toFixed(2) }}DH</span>
          </div>

          <div class="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr class="my-4" />

          <div class="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>{{ cart.cartTotal.toFixed(2) }}DH</span>
          </div>
        </div>

        <button
          @click="proceedToCheckout"
          class="w-full mt-6 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cartStore";

const cart = useCartStore();

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cart.updateQuantity(item.id, item.quantity - 1, item.size, item.color);
  } else {
    cart.removeProduct(item.id, item.size, item.color);
  }
};

const increaseQuantity = (item) => {
  cart.updateQuantity(item.id, item.quantity + 1, item.size, item.color);
};

const removeItem = (item) => {
  cart.removeProduct(item.id, item.size, item.color);
};

const proceedToCheckout = () => {
  navigateTo("/checkout");
};

onMounted(() => {
  cart.initializeCart();
});
</script>
