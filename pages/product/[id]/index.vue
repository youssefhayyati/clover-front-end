<script setup>
const { id } = useRoute().params;

const product = await useFetch(`https://fakestoreapi.com/products/${id}`);
</script>

<template>
  <ProductsProductDetail :product="product.data" />
</template>

<style></style>
