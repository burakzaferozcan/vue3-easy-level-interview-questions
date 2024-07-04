<template>
  {{ count }}
  <button @click="increment">arttır</button>
  <button @click="decrement">azalt</button>
  <button @click="incrementAsync">asenkron arttır</button>
  <button @click="decrementAsync">asenkron azalt</button>
</template>

<script setup>
import useStore from "../store.js";
import { storeToRefs } from "pinia";
const { count } = storeToRefs(useStore());
const { increment, decrement, incrementAsync, decrementAsync } = useStore();
</script>
