<script setup>
import ProductList from "~/components/products/ProductList.vue";
</script>

<template>
  <div class="hero w-[100vw] h-auto flex flex-col gap-8">
    <HeroSection class="md:relative md:z-10" />
    <div
      class="w-full h-20 flex items-center justify-start sm:justify-center relative z-10 md:px-24 my-10"
    >
      <h1 class="sm:text-4xl md:text-7xl font-bold text-slate-800 mb-10">
        Our Product List
      </h1>
    </div>
    <ProductList />
    <TestominialsTestimonialCard />
  </div>
</template>
