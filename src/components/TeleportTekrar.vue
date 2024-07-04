<template>
  <teleport to="#modal-target">
    <div class="border">
      <div class="red">
        <h1>teleport tekrarı örneği</h1>
        <h1 class="modal">burak zafer özcan</h1>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.red {
  background-color: red;
  padding: 20px;
  border-radius: 10px;
}
</style>
