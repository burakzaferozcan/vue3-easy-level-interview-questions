<template>
  <button @click="handleClick">Tıkla</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["myEvent"]);

function handleClick() {
  emit("myEvent", "Bu bir mesaj");
}
</script>
