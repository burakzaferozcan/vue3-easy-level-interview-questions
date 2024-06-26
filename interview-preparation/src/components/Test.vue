<template>
  <div class="border">
    <p>a : {{ a }}</p>
    <p>b : {{ b }}</p>
    <button @click="a++">a+</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const a = ref(1);
// hatalı kullanım : const b = a + 2;
// computed kullanmalıyız :
const b = computed(() => a.value + 2);
console.log(a);
</script>
