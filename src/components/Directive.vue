<template>
  <div class="border">
    <h1>directive örneği</h1>
    <input v-focus placeholder="Otomatik odaklanır" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const vFocus = {
  mounted(el) {
    el.focus();
  },
};
</script>
