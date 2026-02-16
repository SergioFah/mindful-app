<template>
  <div class="row">
    <q-input class="col" v-model="text" color="primary" :dense="true" placeholder="..." />
    <q-btn @click="addItem" :disable="!text" :ripple="false" flat color="primary" icon="add" dense />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('');

const emit = defineEmits(['addItem'])

function addItem () {
  emit('addItem', text.value);
  text.value = '';
}
</script>

<style lang="scss">
.q-field__native {
  color: $primary;
}
</style>
