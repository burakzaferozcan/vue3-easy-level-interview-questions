<template>
  <div>
    <button @click="showSharedData = !showSharedData">
      provide data toggle
    </button>
    <p v-if="showSharedData">Alınan veri: {{ sharedData }}</p>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
const sharedData = inject("sharedData");
const showSharedData = ref(false);
</script>
