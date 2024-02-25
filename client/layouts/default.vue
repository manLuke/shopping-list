<template>
  <div class="px-4 py-3">
    <slot />
  </div>
  <div
    class="text-2xl text-gray-400 bg-zinc-800 fixed z-50 bottom-0 grid grid-cols-2 place-items-center min-h-14 w-full"
  >
    <NuxtLink to="/"><FontAwesome icon="fa-solid fa-list-ul" /></NuxtLink>
    <NuxtLink to="/account"><FontAwesome icon="fa-regular fa-user" /></NuxtLink>
  </div>
</template>

<style scoped>
a[aria-current="page"] {
  color: rgb(249 250 251);
}
</style>
