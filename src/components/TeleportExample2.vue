<template>
  <div class="border">
    <h1>Teleport Örneği 2 v-show</h1>
    <h3>v-show :</h3>
    <ul>
      <li>
        Elemanı her zaman DOM'da tutar ama görünürlüğünü display: none ile
        kontrol eder.
      </li>
      <li>Koşul değiştiğinde sadece CSS sınıfı güncellenir.</li>
      <li>
        Daha az maliyetlidir ve sık sık görünürlük değişikliklerinde daha
        verimlidir.
      </li>
    </ul>
    <button @click="showModal = true">modali aç</button>
    <teleport to="#modal-target">
      <div class="modal" v-show="showModal == true">
        <h1>bu bir modal</h1>
        <button @click="showModal = false">kapat</button>
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
