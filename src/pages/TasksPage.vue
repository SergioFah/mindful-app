<template>
  <q-page>
    <div class="absolute-full column q-pa-md">
      <q-scroll-area class="col">
        <div ref="listRef">
          <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :id="task.id"
            v-model:status="task.done"
            v-model:description="task.description"
            @delete-item="removeItem"
          />
        </div>
      </q-scroll-area>
      <div class="q-py-lg">
        <AddTask @add-item="addItem"></AddTask>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from 'src/types/task';
import AddTask from 'components/AddTask.vue';
import TaskItem from 'components/TaskItem.vue';
import { useSortable } from '@vueuse/integrations/useSortable';

const tasks = ref<Task[]>([
  { id: 1, description: 'Estudar Vue 3', done: false },
  { id: 2, description: 'Entender TypeScript', done: true },
  { id: 3, description: 'Implementar Drag and Drop', done: false },
]);

const listRef = ref<HTMLElement | null>(null);

useSortable(listRef, tasks, {
  animation: 200,
  ghostClass: 'opacity-10',
  forceFallback: true,
  delay: 150,
  delayOnTouchOnly: true,
  fallbackTolerance: 3,
  fallbackOnBody: true,
});

function removeItem(id: number) {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
}

function addItem(description: string) {
  const nextId = tasks.value.length > 0 ? Math.max(...tasks.value.map((t) => t.id)) + 1 : 1;

  tasks.value.push({
    id: nextId,
    description,
    done: false,
  });
}
</script>

<style scoped lang="scss">
.opacity-10 {
  opacity: 0.1;
}
</style>
