<template>
  <h1>{{ title }}</h1>
  <!--? gönderilen slot name'i belirtilmemişse bu şekilde gösterilir  -->
  <slot></slot>
  <!--? gönderilen slot named slot ise bu şekilde gösterilir  -->
  <slot name="title"></slot>
</template>

<script setup>
// parent componentten child componente gelen propu yakalamak
defineProps(["title"]);
</script>
