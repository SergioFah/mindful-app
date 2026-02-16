<template>
  <q-layout view="lhh LpR lff">
    <q-header class="bg-dark" height-hint="70">
      <q-toolbar>
<!--        <q-btn dense flat round color="primary" icon="menu" @click="toggleLeftDrawer" />-->
        <q-toolbar-title align="center"> Mindful </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="tab" dense align="justify" animated>
        <q-tab :ripple="false" name="to-do" label="To-do" />
        <q-tab :ripple="false" name="habits" label="Habits" />
        <q-tab :ripple="false" name="gratitude" label="Gratitude" />
      </q-tabs>
    </q-header>
<!--    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile"> </q-drawer>-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// const leftDrawerOpen = ref(false);
const tab = ref('alarms');

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
