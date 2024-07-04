<template>
  <div class="border">
    <h6>{{ title }}</h6>
    <slot name="default"></slot>
    <slot name="title"></slot>
    <h6>{{ title2 }}</h6>
    <button @click="handleEmit">emit yazısı değiştir</button>
  </div>
</template>

<script setup>
import { inject, ref, defineEmits } from "vue";
const title2 = inject("title2");
defineProps(["title"]);
const emit = defineEmits(["emitGonder"]);
const handleEmit = () => {
  emit("emitGonder", "emit ile gelen yazı");
};
</script>
