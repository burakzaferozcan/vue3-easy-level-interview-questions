<template>
  <div class="border">
    <h1>reactive ve ref</h1>
    <p>
      Hangi Durumda Hangi Yöntemi Kullanmalıyım? Nesnenin içindeki her türlü
      değişikliği izlemek istiyorsanız: <b> reactive</b> kullanın. Sadece
      nesnenin referansını izlemek istiyorsanız: <b>ref</b> kullanın.
    </p>
    <h2>reactive</h2>
    <p>
      <b> reactive </b>ile oluşturulan nesneler reaktif olarak kabul edilir,
      yani nesnenin içindeki herhangi bir değişiklik, Vue.js'in otomatik olarak
      ilgili bileşenleri yeniden oluşturmasını tetikler. user nesnesi reactive
      ile oluşturulduğu için, user.name veya user.surname gibi özelliklerde
      yapılan değişiklikler, kullanıcı arayüzünde anında yansıtılır. changeName
      ve changeSurname fonksiyonları user nesnesinin özelliklerini doğrudan
      değiştirir ve bu değişiklikler otomatik olarak kullanıcı arayüzüne
      yansıtılır.
    </p>
    <p>user name : {{ user.name }}</p>
    <p>user surname : {{ user.surname }}</p>
    <button @click="changeName">changeName</button>
    <button @click="changeSurname">changeSurname</button>
    <hr />
    <h2>ref</h2>
    <p>
      <b> ref</b> ile oluşturulan nesneler reaktif değildir, yani nesnenin
      içindeki değişiklikler, Vue.js'in otomatik olarak ilgili bileşenleri
      yeniden oluşturmasını tetiklemez. user2 nesnesi ref ile oluşturulduğu
      için, user2.value.name veya user2.value.surname gibi özelliklerde yapılan
      değişiklikler, kullanıcı arayüzünde anında yansıtılmaz. changeName2 ve
      changeSurname2 fonksiyonları user2.value nesnesinin özelliklerini
      değiştirir. Bu değişikliklerin kullanıcı arayüzüne yansıtılması için,
      Vue.js'in yeniden oluşturulması gerekir.
    </p>
    <p>user2 name : {{ user2.name }}</p>
    <p>user2 surname : {{ user2.surname }}</p>
    <button @click="changeName2">changeName2</button>
    <button @click="changeSurname2">changeSurname2</button>
    <p>
      <b> Özetle:</b>

      reactive, nesnenin içindeki her türlü değişikliği izler ve kullanıcı
      arayüzünü otomatik olarak günceller. ref, sadece nesnenin referansını
      izler ve nesnenin içindeki değişiklikleri izlemek için value özelliği
      kullanılır.
    </p>
    <p>
      <b> Hangi Durumda Hangi Yöntemi Kullanmalıyım?</b>

      Nesnenin içindeki her türlü değişikliği izlemek istiyorsanız:
      <b>reactive</b> kullanın. Sadece nesnenin referansını izlemek
      istiyorsanız: <b>ref </b> kullanın.
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// Reactive:
// reactive ile oluşturulan nesneler reaktif olarak kabul edilir, yani nesnenin içindeki herhangi bir değişiklik, Vue.js'in otomatik olarak ilgili bileşenleri yeniden oluşturmasını tetikler.
// user nesnesi reactive ile oluşturulduğu için, user.name veya user.surname gibi özelliklerde yapılan değişiklikler, kullanıcı arayüzünde anında yansıtılır.
// changeName ve changeSurname fonksiyonları user nesnesinin özelliklerini doğrudan değiştirir ve bu değişiklikler otomatik olarak kullanıcı arayüzüne yansıtılır.

// reactive, nesnenin içindeki her türlü değişikliği izler ve kullanıcı arayüzünü otomatik olarak günceller.
const user = reactive({
  name: "burak",
  surname: "özcan",
});

const changeName = () => {
  user.name = "zafer";
};

const changeSurname = () => {
  user.surname = "öz";
};

// Ref:
// ref ile oluşturulan nesneler reaktif değildir, yani nesnenin içindeki değişiklikler, Vue.js'in otomatik olarak ilgili bileşenleri yeniden oluşturmasını tetiklemez.
// user2 nesnesi ref ile oluşturulduğu için, user2.value.name veya user2.value.surname gibi özelliklerde yapılan değişiklikler, kullanıcı arayüzünde anında yansıtılmaz.
// changeName2 ve changeSurname2 fonksiyonları user2.value nesnesinin özelliklerini değiştirir. Bu değişikliklerin kullanıcı arayüzüne yansıtılması için, Vue.js'in yeniden oluşturulması gerekir.

// ref, sadece nesnenin referansını izler ve nesnenin içindeki değişiklikleri izlemek için value özelliği kullanılır.
const user2 = ref({
  name: "burak",
  surname: "özcan",
});

const changeName2 = () => {
  user2.value.name = "zafer";
};

const changeSurname2 = () => {
  user2.value.surname = "öz";
};
</script>
