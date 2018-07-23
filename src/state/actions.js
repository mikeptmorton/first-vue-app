export default {
  // Actions are usually async
  fetchFromDb: (context) => {
    context.commit('baseIncrement');
  },
};
