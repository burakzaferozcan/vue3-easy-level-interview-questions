<template>
  <div class="border">
    <h1>Teleport Örneği</h1>
    <button @click="showModal = true">Modali Aç</button>

    <teleport to="#modal-target">
      <div v-if="showModal" class="modal border">
        <h2>Bu bir modal</h2>
        <button @click="showModal = false">Kapat</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 204, 204);
  padding: 20px;
}
</style>
