<template>
  <!-- <div>
    <p>{{ $t('empty_list') }}</p>
  </div> -->
  <div class="grid gap-2 w-full">
    <ListItem
      v-for="(item, index) in items"
      :item="item"
      :is-selected="index === selected"
      @select="selectItem(index)"
      @edit="editItem(index)"
      @delete="deleteItem(index)"
    />
  </div>

  <Dialog v-model:visible="isEditing" class="max-w-md w-10/12" modal header="List name" @hide="hideDialog">
    <input class="w-full p-2 mt-1 mb-5 border-2 border-black rounded-md" v-model="editedVal" />
    <div class="flex justify-end gap-2">
      <button class="text-red-500 border-2 border-red-500 rounded-md px-1.5 py-0.5" @click="hideDialog">
        {{ $t("btn_cancel") }}
      </button>
      <button class="text-green-500 border-2 border-green-500 rounded-md px-1.5 py-0.5" @click="confirmEdit()">
        {{ $t("btn_confirm") }}
      </button>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import { isNuxtPlugin } from "#app";

const items = ref<
  {
    id: number;
    content: string | null;
  }[]
>([
  { id: 1, content: "Nuttela" },
  { id: 2, content: "Peanut Butter" },
  { id: 3, content: "Jelly" },
  { id: 4, content: "Bread" },
  { id: 5, content: "Milk" },
  { id: 6, content: "Eggs" },
  { id: 7, content: "Bacon" },
  { id: 8, content: "Sausage" },
  { id: 9, content: "Cheese" },
  { id: 10, content: "Butter" },
]);

const selected = ref<number | null>(null); // index of the selected item - used for dialog
const editing = ref<number | null>(null); // index of the item being edited
const editedVal = ref<string | null>(null); // value of the item being edited - used in dialog

function selectItem(index: number) {
  if (selected.value === index) {
    selected.value = null;
  } else {
    selected.value = index;
  }
}

const isEditing = computed({
  get: () => editing.value !== null,
  set: (value: boolean) => {
    if (!value) {
      editing.value = null;
    }
  },
});

function editItem(index: number) {
  selected.value = null;
  editing.value = index;
  editedVal.value = items.value[index].content;
}

function deleteItem(index: number) {
  selected.value = null;
  isEditing.value = false;
  items.value.splice(index, 1);
}

function confirmEdit() {
  if (editing.value !== null) {
    items.value[editing.value].content = editedVal.value;
  }
  editing.value = null;
}

function hideDialog() {
  editing.value = null;
  isEditing.value = false;
}
</script>
