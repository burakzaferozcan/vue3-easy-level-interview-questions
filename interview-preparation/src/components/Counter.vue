<template>
  <div class="border">
    <h1>ref ve computed</h1>
    <p>count : {{ count }}</p>
    <p>Double Count (computed): {{ doubleCount }}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
//! computed kullanmalıyız
//! const doubleCount =  count.value * 2;
const doubleCount = computed(() => count.value * 2);
</script>
