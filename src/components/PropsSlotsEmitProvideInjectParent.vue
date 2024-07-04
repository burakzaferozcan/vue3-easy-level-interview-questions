<template>
  <div>
    <PropsSlotsProvideInjectChild :title="title" @emitGonder="emitGeldi" />
    <PropsSlotsProvideInjectChild
      @emitGonder="emitGeldi"
      title="bu prop ile gönderilmiş statik title"
    />
    <PropsSlotsProvideInjectChild @emitGonder="emitGeldi">
      <template #default>
        <h6>bu slot ile gönderilmiş title</h6>
      </template>
    </PropsSlotsProvideInjectChild>
    <PropsSlotsProvideInjectChild @emitGonder="emitGeldi">
      <template #title>
        <h6>bu named slot ile gönderilmiş title</h6>
      </template>
    </PropsSlotsProvideInjectChild>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import PropsSlotsProvideInjectChild from "./PropsSlotsEmitProvideInjectChild.vue";
const title = ref("bu prop ile gönderilmiş dinamik title");
const title2 = ref("bu provide inject ile gönderilmiş title");
provide("title2", title2);
const msg = ref("değişecek yazı");
const emitGeldi = (message) => {
  msg.value = message;
};
</script>
