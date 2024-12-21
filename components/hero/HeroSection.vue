<script setup>
import pic6 from "@/assets/images/pic6.png";
</script>

<template>
  <div class="flex flex-wrap justify-center items-center md:mx-24">
    <div class="w-full md:w-7/12 md:mb-10">
      <div class="mx-auto md:h-[80vh] sm:p-10 flex items-center relative z-20">
        <header
          class="w-full md:w-3/4 px-4 md:flex mt-10 items-center gap-4 h-auto md:h-[80vh] lg:mt-10"
        >
          <div class="text-center md:text-start w-full md:w-full">
            <h1 class="text-5xl lg:text-7xl font-normal">
              Find your
              <span class="text-green-700 animate-pulse">greeny</span> stuff for
              your room
            </h1>
            <div class="w-20 mx-auto md:mx-0 h-2 bg-green-700 my-4"></div>
            <p class="text-xl mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maiores neque eaque ea odit placeat, tenetur illum
              distinctio nulla voluptatum a corrupti beatae tempora aperiam quia
              id aliquam possimus aut.
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <nuxt-link
                to="/products"
                class="bg-green-400 text-white text-md font-medium px-4 py-2 rounded shadow font-sans"
              >
                See Our Products
              </nuxt-link>
              <nuxt-link
                to="/contact-us"
                class="border border-green-500 text-green-500 text-md font-medium px-4 py-2 rounded shadow font-sans"
              >
                Get in touch
              </nuxt-link>
            </div>
          </div>
        </header>
      </div>
    </div>
    <div class="md:w-5/12">
      <div
        class="relative md:h-[450px] w-96 rounded-tl-[160px] rounded-br-[160px] rounded-tr-[40px] rounded-bl-[40px] bg-green-200 z-10 overflow-hidden shadow-inter"
      >
        <img
          :src="pic6"
          alt="Leafs"
          class="!h-[500px] w-full md:!h-[700px] object-contain sm:h-screen sm:w-full md:absolute -top-36 left-0 right-[100px]"
        />
        <Icon name="dots" />
        <Icon name="dots" />
      </div>
    </div>
  </div>
</template>

<style>
.shadow-inter {
  box-shadow: inset 0 0 5px #7e7e7e;
}
</style>
