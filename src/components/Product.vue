<template>
  <div class="border">
    <h1>reactive ve computed</h1>
    <h1>Ürün Bilgileri</h1>
    <p>Ürün Adı: {{ product.name }}</p>
    <p>Fiyat: {{ product.price }}</p>
    <p>İndirimli Fiyat: {{ discountedPrice }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const product = reactive({
  name: "Akıllı Telefon",
  price: 1000,
});

const discountRate = ref(0.1); // İndirim oranı

// İndirimli fiyatı hesaplayan computed property
const discountedPrice = computed(() => {
  return product.price * (1 - discountRate.value);
});
</script>
