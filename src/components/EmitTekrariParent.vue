<template>
  <div class="border">
    <h1>Emit Parent</h1>
    <h3>{{ text }}</h3>
    <EmitTekrariChild @gonder="geldi" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmitTekrariChild from "./EmitTekrariChild.vue";
const text = ref("değiştirilecek text");
const geldi = (msg) => {
  text.value = msg;
};
</script>
