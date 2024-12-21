<script setup>
import { Navbar } from "@/components";
</script>

<template>
  <div class="bg-white h-screen w-full flex flex-col relative">
    <div class="my-24">
      <Navbar />
      <div class="mt-16 md:mt-12 relative z-10">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
