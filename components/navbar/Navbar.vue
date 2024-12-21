<script setup>
import { PreNav, Navigation, Logo, HumbergerMenu, Buttons } from "@/components";
const isOpen = ref(false);
</script>

<template>
  <div>
    <PreNav />
    <header
      class="bg-white overflow-hidden fixed top-10 flex items-center justify-between md:py-0 md:px-6 p-4 w-full mx-auto z-50 shadow-sm"
    >
      <!-- Navigation Links -->
      <nav
        :class="{ block: isOpen, hidden: !isOpen }"
        class="hidden md:flex items-center space-x-6"
      >
        <Navigation class="w-1/3" />
      </nav>
      <!-- Logo -->
      <div class="relative w-[690px] flex md:justify-center min-w-[200px]">
        <Logo class="w-1/3 md:flex md:justify-center" />
      </div>
      <!-- Hamburger Menu for Mobile -->
      <HumbergerMenu />
      <!-- Buttons -->
      <div
        :class="{ block: isOpen, hidden: !isOpen }"
        class="hidden md:flex items-center justify-end space-x-4 w-1/3"
      >
        <Buttons />
      </div>
    </header>
  </div>
</template>
