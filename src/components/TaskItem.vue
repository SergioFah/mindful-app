<template>
  <q-slide-item dark @right="emit('delete-item', props.id)" right-color="green">
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <div class="row items-center">
      <q-checkbox
        keep-color
        :ripple="false"
        :color="done ? 'grey' : 'primary'"
        v-model="done"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
      />
      <div class="cursor-pointer col q-ml-sm">
        <div :class="{ 'text-strike text-grey': done }">{{ description }}</div>
        <q-popup-edit
          v-model="description"
          class="bg-dark text-white"
          auto-save
          dark
          square
          v-slot="scope"
          @save="handleSave"
        >
          <q-input
            v-model="scope.value"
            color="primary"
            dense
            autofocus
            counter
            maxlength="100"
            @keyup.enter="scope.set"
          />
        </q-popup-edit>
      </div>
    </div>
  </q-slide-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  (e: 'delete-item', id: number): void;
}>();
const done = defineModel<boolean>('status');
const description = defineModel<string>('description');

function handleSave(value: string) {
  if (value.trim().length === 0) {
    emit('delete-item', props.id);
  }
}
</script>
<style scoped lang="scss"></style>
