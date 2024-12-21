<script setup></script>

<template>
  <footer
    class="flex flex-col w-full justify-center items-center gap-10 bg-base-200 text-base-content rounded box-border p-10 bg-green-500"
  >
    <nav
      class="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 h-auto gap-14 sm:gap-16 s:w-[50%] md:w-[50%] lg:w-[50%] sm:w-full justify-center"
    >
      <nuxt-link
        to="products"
        class="link link-hover text-white cursor-pointer flex justify-center"
        >Products</nuxt-link
      >
      <nuxt-link
        to="collections"
        class="link link-hover text-white cursor-pointer flex justify-center"
        >Collections</nuxt-link
      >
      <nuxt-link
        to="contact"
        class="link link-hover text-white cursor-pointer flex justify-center"
        >Contact Us</nuxt-link
      >
      <nuxt-link
        to="about"
        class="link link-hover text-white cursor-pointer flex justify-center"
        >About Us</nuxt-link
      >
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-14 w-[40%] justify-between">
        <Icon
          name="facebook"
          class="text-2xl hover:animate-spin cursor-pointer text-white"
        ></Icon>
        <Icon
          name="instagram"
          class="text-2xl hover:animate-spin cursor-pointer text-white"
        ></Icon>
        <Icon
          name="twitter"
          class="text-2xl hover:animate-spin cursor-pointer text-white"
        ></Icon>
        <Icon
          name="pinterest"
          class="text-2xl hover:animate-spin cursor-pointer text-white"
        ></Icon>
      </div>
    </nav>
    <aside>
      <p class="text-white sm:text-center">
        Copyright © {{ new Date().getFullYear() }} - All right reserved by ACME
        Industries Ltd
      </p>
    </aside>
  </footer>
  <!--
  </footer> -->
  <!-- <footer class="bg-gray-50">
    <div
      class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10"
    >
      <div class="max-w-sm">
        <div class="mb-6 flex h-12 items-center space-x-2">
          <Icon name="logo" filled class="text-9xl"></Icon>
        </div>
        <div class="text-gray-500">
          Functional healthwear for modern medical professionals
        </div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
        <div class="text-gray-500">
          35 Remida Heights, <br />
          45 Street, <br />
          South Caroline, US
        </div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
        <nav
          class="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 h-auto gap-2 sm:gap-2 s:w-[50%] md:w-[50%] lg:w-[50%] sm:w-full justify-center"
        >
          <nuxt-link
            to="products"
            class="link link-hover text-slate-800 cursor-pointer flex justify-center"
            >Products</nuxt-link
          >
          <nuxt-link
            to="collections"
            class="link link-hover text-slate-800 cursor-pointer flex justify-center"
            >Collections</nuxt-link
          >
          <nuxt-link
            to="contact"
            class="link link-hover text-slate-800 cursor-pointer flex justify-center"
            >Contact Us</nuxt-link
          >
          <nuxt-link
            to="about"
            class="link link-hover text-slate-800 cursor-pointer flex justify-center"
            >About Us</nuxt-link
          >
        </nav>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4">
          Subscribe to our Newsletter
        </div>
        <div class="flex flex-col">
          <div class="mb-4">
            <input
              type="email"
              class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button
              class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div
        class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left"
      >
        <div class="">© 2022 BelAir | All Rights Reserved</div>
        <div class="">
          <a class="" href="#">Privacy Policy</a>
          <span>|</span>
          <a class="" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer> -->
</template>

<style></style>
