export default {
  set(state, { items }){
    const [ entry ] = items;

    state.entry = {
      ...state.entry,
      ...entry,
    };
  },
};
