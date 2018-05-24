export const createStore = (state, storeChange) => {
  const listeners = [];
  const store = state || {};
  const subscribe = (listen) => listeners.push(listen); 
  const dispatch = (action) => {
    storeChange(store, action);
    listeners.forEach(item => {
      item(store);
    })
  };
  return { store, dispatch, subscribe }
}
// export const createStore = (state, storeChange) => {
//   const listeners = [];
//   const store = state || {};
//   const subscribe = (listen) => listeners.push(listen);
//   const dispatch = (action) => {
//     const newStore = storeChange(store, action);
//     // listeners.forEach(item => {
//     //   console.log(newStore, 'dadad')
//     //   item(newStore);
//     // })
//   };
//   return { store, dispatch, subscribe }
// }