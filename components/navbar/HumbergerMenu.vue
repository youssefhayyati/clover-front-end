<script setup>
const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="md:hidden flex justify-end gap-2 items-center">
      <div class="flex flex-row items-center justify-evenly h-full gap-2">
        <a
          class="bg-green-400 rounded-xl w-[37px] h-[37px] flex justify-center items-center"
        >
          <Icon name="heart" class="text-[22.5px] w-[23px] text-white"></Icon>
        </a>
        <a
          class="bg-green-400 rounded-xl w-[37px] h-[37px] flex justify-center items-center"
        >
          <Icon name="bag" class="text-3xl"></Icon>
        </a>
      </div>
      <button
        @click="isOpen = !isOpen"
        class="text-white focus:outline-none bg-green-400 rounded-xl w-[37px] h-[37px] flex justify-center items-center"
      >
        <svg
          class="w-6 h-8 flex text-2xl"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
    <!-- Full-Screen Menu -->
    <transition name="menu">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-green-700 flex flex-col items-center justify-center z-50"
      >
        <button
          @click="isOpen = false"
          class="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav
          @click="isOpen = false"
          class="flex flex-col items-center justify-center text-white w-full"
        >
          <nuxt-link
            to="/"
            class="text-2xl py-8 active:bg-green-400 w-full flex justify-center"
            >Home</nuxt-link
          >
          <nuxt-link
            href="products"
            class="text-2xl py-8 active:bg-green-400 w-full flex justify-center"
            >Products</nuxt-link
          >
          <nuxt-link
            href="collections"
            class="text-2xl py-8 active:bg-green-400 w-full flex justify-center"
            >Collections</nuxt-link
          >
          <!-- <nuxt-link
            to="about-us"
            class="text-2xl py-8 active:bg-green-400 w-full flex justify-center"
            >About</nuxt-link
          > -->
          <nuxt-link
            to="contact-us"
            class="text-2xl py-8 hover:bg-green-400 w-full flex justify-center"
            >Contact</nuxt-link
          >
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
