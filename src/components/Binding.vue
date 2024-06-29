<template>
  <div class="border">
    <h1>v-bind ve v-model örneği</h1>
    <input type="text" v-model="inputText" :placeholder="placeholderText" />
    <p>v-model ile bağlanan text : {{ inputText }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputText = ref("");
const placeholderText = ref("placeholder v-bind (:) ile bağlanmıştır");
</script>
<style scoped>
input {
  width: 100%;
}
</style>
