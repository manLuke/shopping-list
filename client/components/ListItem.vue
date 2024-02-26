<script lang="ts" setup>
defineProps<{
  isSelected: boolean;
  item: { id: number; content: string | null };
}>();

defineEmits({
  select: () => {},
  edit: () => {},
  delete: () => {},
});
</script>

<template>
  <div class="relative bg-slate-800 rounded-md w-full mx-auto group">
    <!-- Content div -->
    <div
      class="relative bg-slate-800 flex h-full w-full z-10 p-2 rounded-md transition-transform ease-out duration-400 transform"
      :class="{ '-translate-x-24': isSelected }"
      @click="$emit('select')"
    >
      <p class="text-lg">{{ item.content }}</p>
      <div class="h-full px-1.5 grid place-items-center ml-auto">
        <FontAwesome icon="fa-solid fa-grip-lines-vertical" />
      </div>
    </div>
    <!-- Buttons div -->
    <div class="absolute overflow-hidden flex justify-end top-0 right-0 z-0 w-full h-full rounded-md">
      <button class="bg-blue-700 h-full aspect-square" @click="$emit('edit')">
        <FontAwesome icon="fa-solid fa-edit" />
      </button>
      <button class="bg-red-700 h-full aspect-square" @click="$emit('delete')">
        <FontAwesome icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>
