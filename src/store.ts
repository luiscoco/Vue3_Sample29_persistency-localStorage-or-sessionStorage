// store.ts
import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    storage: sessionStorage, //you can also set to "sessionStorage" instead of to "localStorage"
    paths: ["count"],
  },
});
