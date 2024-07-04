import { defineStore } from "pinia";
const useStore = defineStore({
  id: "counterStore",
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
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.increment();
    },
    async decrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.decrement();
    },
  },
});

export default useStore;
