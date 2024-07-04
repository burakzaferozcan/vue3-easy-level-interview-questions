<template>
  <div class="border">
    <h3>emit child</h3>
    <button @click="emitGonder">emit tekrarı örneği</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["gonder"]);
const emitGonder = () => {
  emit("gonder", "bu emit ile gelen yazı");
};
</script>
