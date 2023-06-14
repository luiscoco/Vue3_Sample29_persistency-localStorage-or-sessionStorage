<template>
  <div>
    <p>Count: {{ store.count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { useMyStore } from "./store";

// Access the store
const store = useMyStore();

// Access the store's state and actions
const increment = () => store.increment();
</script>
