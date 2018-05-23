export const createStore = (state, storeChange) => {
  const listeners = [];
  const store = state || {};
  const subscribe = (listen) => listeners.push(listen);
  const dispatch = (action) => {
    storeChange(store, action);
    listeners.forEach(item => {
      item();
    })
  };
  return { store, dispatch, subscribe }
}