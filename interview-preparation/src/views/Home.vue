<template>
  <div>
    <!--? child componente prop göndermek -->
    <Title title="İnteview Preparation" />
    <Title :title="title2" />
    <Counter />
    <Product />
    <User />
    <Test />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "../components/Title.vue";
import Counter from "../components/Counter.vue";
import User from "../components/User.vue";
import Product from "../components/Product.vue";
import Test from "../components/Test.vue";
const title2 = ref("İnteview Preparation2");
</script>
