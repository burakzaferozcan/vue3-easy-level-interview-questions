<template>
  <div class="border">
    <h1>emit örneği</h1>
    <EmitChild @myEvent="handleMyEvent" />
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmitChild from "./EmitChild.vue";
const msg = ref("");
function handleMyEvent(message) {
  msg.value = message;
}
</script>
