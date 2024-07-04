<template>
  <div class="border">
    <h1>ref computed</h1>
    <h1>{{ count }}</h1>
    <button @click="count++">arttır</button>
    <button @click="count--">azalt</button>
    <p>{{ computedCount }} computed count</p>
  </div>
  <div class="border">
    <h1>reactive computed</h1>
    <h1>{{ count2.deger }}</h1>
    <button @click="count2.deger++">arttır</button>
    <button @click="count2.deger--">azalt</button>
    <p>{{ computedCount2 }} computed count</p>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
const count = ref(0);
const computedCount = computed(() => count.value * 2);
const count2 = reactive({ deger: 0 });
const computedCount2 = computed(() => count2.deger + 20);
</script>
