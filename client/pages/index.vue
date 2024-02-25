<template>
  <!-- <div>
    <p>{{ $t('emptyList') }}</p>
  </div> -->
  <div class="grid gap-2 w-full">
    <ListItem v-for="(item, index) in items" :is-selected="index === selected" @select="selectItem(index)" />
  </div>
</template>

<script lang="ts" setup>
const items = ref([
  { id: 1, name: "Nuttela" },
  { id: 2, name: "Peanut Butter" },
  { id: 3, name: "Jelly" },
  { id: 4, name: "Bread" },
  { id: 5, name: "Milk" },
  { id: 6, name: "Eggs" },
  { id: 7, name: "Bacon" },
  { id: 8, name: "Sausage" },
  { id: 9, name: "Cheese" },
  { id: 10, name: "Butter" },
]);

const selected = ref<number | null>(null);

function selectItem(index: number) {
  if (selected.value === index) {
    selected.value = null;
  } else {
    selected.value = index;
  }
}
</script>
