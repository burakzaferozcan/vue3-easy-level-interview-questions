import { defineStore } from "pinia";

const useStore = defineStore({
  id: "store",
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async incrementAsync(delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.increment();
    },
    async decrementAsync(delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.decrement();
    },
  },
});

export default useStore;
