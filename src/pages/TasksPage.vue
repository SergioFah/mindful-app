<template>
  <q-page>
    <div class="absolute-full column q-pa-md">
      <q-scroll-area class="col">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :id="task.id"
          v-model:status="task.done"
          v-model:description="task.description"
          @delete-item="removeItem"
        >
        </TaskItem>
      </q-scroll-area>

      <div>
        <AddTask @add-item="addItem"></AddTask>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import type { Task } from 'src/types/task';
import AddTask from 'components/AddTask.vue';
import TaskItem from 'components/TaskItem.vue';
import { ref } from 'vue';

const tasks = ref<Task[]>([
  { id: 1, description: 'Estudar Vue 3', done: false },
  { id: 2, description: 'Entender TypeScript', done: true },
]);



function removeItem(id: number) {
  tasks.value.splice(
    tasks.value.findIndex((task) => task.id === id),
    1,
  );
}

function addItem(description: string) {
  tasks.value.push({ id: tasks.value.length + 1, description, done: false });
}
</script>
