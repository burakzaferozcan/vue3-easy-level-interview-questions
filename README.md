# Vue.js 3 ile ilgili kolay seviyede mülakat soruları

## 1. Vue.js nedir?

    Vue.js, kullanıcı arayüzleri geliştirmek için kullanılan
    progresif bir JavaScript framework'üdür. Tek sayfalık
    uygulamalar (SPA) ve web arayüzleri oluşturmak için
    kullanılır.

## 2. Vue 3'ün temel özellikleri nelerdir?

- **Composition API**
- **Daha hızlı performans**
- **Daha küçük paket boyutu**
- **Yeni Renderer API**
- **Daha iyi TypeScript desteği**

## 3. Vue CLI nedir ve ne için kullanılır?

    Vue CLI, Vue.js projeleri oluşturmak ve yönetmek için
    kullanılan bir komut satırı aracıdır. Proje oluşturma,
    geliştirme sunucusu başlatma, üretim için derleme ve test
    komutları gibi işlemler için kullanılır.

## 4. Bir Vue bileşenini nasıl tanımlarsınız?

```
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  template: '<div>{{ message }}</div>'
};
```

## 5. Vue 3'te "ref" ve "reactive" arasındaki fark nedir?

- **ref: Primitif değerleri reaktif hale getirmek için kullanılır.**
- **reactive: Nesneleri reaktif hale getirmek için kullanılır.**

## 6. Vue 3'te "setup" fonksiyonu nedir?

    setup fonksiyonu, Composition API'sinin bir parçasıdır ve
    bileşenin yaratılma aşamasında çağrılır. Reaktif
    verileri, metodları ve yaşam döngüsü kancalarını
    tanımlamak için kullanılır.

## 7. Vue 3'te lifecycle hook'ları sıralayabilir misiniz?

- **beforeCreate**
- **created**
- **beforeMount**
- **mounted**
- **beforeUpdate**
- **updated**
- **beforeUnmount**
- **unmounted**

## 8. Vue 3'te "computed" özellik nedir ve nasıl kullanılır?

    computed özellikler, reaktif verilere dayalı
    hesaplamaları temsil eder. Vue.js, bağımlılıkları izler
    ve gerektiğinde hesaplamayı tekrarlar.

```
const count = ref(0);
const doubleCount = computed(() => count.value * 2);
```

## 9. Vue Router nedir?

    Vue Router, Vue.js ile tek sayfalık uygulamalarda (SPA)
    sayfa yönlendirmeleri (routing) yapmak için kullanılan
    bir kütüphanedir.

## 10. Vue 3'te bir bileşene nasıl props tanımlanır?

```
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
console.log(title)
```

ya da script setup ile :

```
const props = defineProps(['title'])
console.log(title)
```

## 11. Vue 3'te slotlar nedir?

    Slotlar, bileşenlerin içeriğini dinamik olarak tanımlamak
    için kullanılır. Özellikle children bileşenlere içerik
    geçmek için kullanılır.

## 12. Vuex ya da Pinia nedir?

    Vuex ya da Pinia, Vue.js uygulamaları için durum yönetim
    kütüphaneleridir. Merkezi bir veri deposu (store)
    kullanarak uygulama durumunu yönetir. Önceden vue.js
    dökümantasyonunda önerilen Vuex idi ancak şuanda önerilen
    Pinia'dır.

## 13. Vue 3'te "watch" ne için kullanılır?

    watch, belirli reaktif verilerin değişimlerini izlemek ve
    değişiklik olduğunda bir fonksiyon çalıştırmak için
    kullanılır.

## 14. Vue 3'te "teleport" nedir?

    teleport, bir bileşenin çıktısını DOM hiyerarşisinde
    farklı bir yere taşımak için kullanılır.

## 15. Vue 3'te "v-bind" ne için kullanılır?

    v-bind, HTML özniteliklerini veya DOM özelliklerini
    dinamik olarak bağlamak için kullanılır.

## 16. Vue 3'te "v-if" ve "v-show" arasındaki fark nedir?

- **v-if: Elementi DOM'a ekler veya kaldırır.**
- **v-show: Elementin görünürlüğünü CSS ile kontrol eder.**

## 17. Vue 3'te "v-model" ne işe yarar?

    v-model, iki yönlü veri bağlama yapmak için kullanılır.
    Kullanıcı girişlerini reaktif olarak veri modeline bağlar.

## 18. Vue 3'te "emit" ne için kullanılır?

    emit, children bileşenden parent bileşene olay göndermek
    için kullanılır.

## 19. Vue 3'te "provide" ve "inject" nedir?

- **provide, bir bileşenin alt bileşenlerine veri veya fonksiyonlar sağlamak için kullanılır.**
- **inject, üst bileşen tarafından sağlanan verileri almak için kullanılır.**

## 20. Vue 3'te direktif nedir ve nasıl tanımlanır?

    Direktifler, DOM elemanlarına ek davranışlar eklemek için
    kullanılır.

```
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});
```
