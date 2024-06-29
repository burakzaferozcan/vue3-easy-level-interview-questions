<template>
  <div class="border">
    <h1>pinia store örneği</h1>
    <p>{{ count }}</p>
    <button @click="increment">arttır</button>
    <button @click="decrement">azalt</button>
    <button @click="incrementAsync">async arttır</button>
    <button @click="decrementAsync">async azalt</button>
  </div>
</template>

<script setup>
import useStore from "../store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { count } = storeToRefs(store);
const { increment, decrement, incrementAsync, decrementAsync } = store;
</script>
