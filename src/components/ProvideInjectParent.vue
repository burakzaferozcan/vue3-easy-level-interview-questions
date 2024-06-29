<template>
  <div class="border">
    <h1>provide inject</h1>
    <ProvideInjectChild />
  </div>
</template>

<script setup>
import { provide } from "vue";
import ProvideInjectChild from "./ProvideInjectChild.vue";

const sharedData = "Merhaba, bu bir provide örneği!";
provide("sharedData", sharedData);
</script>
