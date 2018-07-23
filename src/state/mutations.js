export default {
  baseIncrement: (state) => {
    state.count++;
  },
  increment: (state, object) => {
    state.count += object.amount;
  },
  decrement: (state, object) => {
    state.count -= object.amount;
  },
};
