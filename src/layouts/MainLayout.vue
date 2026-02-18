<template>
  <q-layout view="lhh LpR lff">
    <q-header class="bg-dark" height-hint="70">
      <q-toolbar>
<!--        <q-btn dense flat round color="primary" icon="menu" @click="toggleLeftDrawer" />-->
        <q-toolbar-title align="center"> </q-toolbar-title>
      </q-toolbar>
      <q-tabs dense align="justify" animated>
        <q-route-tab :ripple="false" name="to-do" label="To-do" to="/" exact />
        <q-route-tab :ripple="false" name="habits" label="Habits" to="/habits" exact />
        <q-route-tab :ripple="false" name="gratitude" label="Gratitude" to="/gratitude" exact />
      </q-tabs>
    </q-header>
<!--    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile"> </q-drawer>-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.q-tab__label {
  color: $primary;
  font-size: 18px;
}
</style>

<script setup lang="ts">
// import { ref } from 'vue';
// const leftDrawerOpen = ref(false);
// const tab = ref('alarms');

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
