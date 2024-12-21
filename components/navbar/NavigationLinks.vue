<script setup></script>

<template>
  <nav class="nav font-semibold text-lg">
    <ul class="flex items-center">
      <nuxt-link
        to="/"
        class="flex flex-row gap-1 items-center text-green-500 text-base font-light p-4 border-b-2 border-green-700 border-opacity-0 hover:bg-green-400 hover:border-opacity-100 hover:bg-opacity-50 hover:text-green-500 transition duration-700 cursor-pointer active"
      >
        <Icon name="home" class="text-xl" />
        <span>Home</span>
      </nuxt-link>
      <nuxt-link
        to="/products"
        class="flex flex-row gap-1 items-center text-green-500 text-base font-light p-4 border-b-2 border-green-700 border-opacity-0 hover:bg-green-400 hover:border-opacity-100 hover:bg-opacity-50 hover:text-green-500 transition ease-in-out duration-700 cursor-pointer"
      >
        <Icon name="product" class="text-xl" />
        <span>Products</span>
      </nuxt-link>
      <nuxt-link
        to="/collections"
        class="flex flex-row gap-1 items-center text-green-500 text-base font-light p-4 border-b-2 border-green-700 border-opacity-0 hover:bg-green-400 hover:border-opacity-100 hover:bg-opacity-50 hover:text-green-500 transition ease-in-out duration-700 cursor-pointer"
      >
        <Icon name="collection" class="text-xl" />
        <span>Collections</span>
      </nuxt-link>
      <nuxt-link
        to="/contact-us"
        class="flex flex-row gap-1 items-center text-green-500 text-base font-light p-4 border-b-2 border-green-700 border-opacity-0 hover:bg-green-400 hover:border-opacity-100 hover:bg-opacity-50 hover:text-green-500 transition ease-in-out duration-700 cursor-pointer"
      >
        <Icon name="contact" class="text-xl" />
        <span>Contact</span>
      </nuxt-link>
    </ul>
  </nav>
</template>
