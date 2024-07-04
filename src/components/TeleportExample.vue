<template>
  <div class="border">
    <h1>Teleport Örneği v-if</h1>
    <h3>v-if :</h3>
    <ul>
      <li>DOM'da koşul sağlanmadığında elemanı tamamen kaldırır</li>
      <li>Eleman yeniden eklendiğinde yeniden oluşturulur.</li>
      <li>
        Daha fazla maliyetli olabilir, ancak elemanlar sık değiştiğinde
        uygundur.
      </li>
    </ul>
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

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: red;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
