<template>
  <div>
    <!--? child componente prop göndermek -->
    <Title title="İnteview Preparation prop 1" />
    <Title :title="title2" />
    <!--? child componente prop göndermek -->

    <!--? slot mantığı -->
    <Title>
      <h1>İnteview Preparation slot mantığı</h1>
    </Title>
    <Title>
      <h1 slot="title">İnteview Preparation named slot mantığı</h1>
    </Title>
    <!--? slot mantığı -->
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
const title2 = ref("İnteview Preparation prop 2");
</script>
