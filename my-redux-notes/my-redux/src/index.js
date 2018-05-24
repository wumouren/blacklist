import { state } from './redux/state.js';
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';
const { store, dispatch, subscribe } = createStore(state, storeChange);
  
function renderHead (state){
  console.log('render head');
  const head = document.getElementById('head')
  head.innerText = state.text;
  head.style.color = state.color;
}
function renderBody (state){
  console.log('render body');
  const body = document.getElementById('body')
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp (store){
  console.log('render app');
  renderHead(store.head);
  renderBody(store.body);
}
// 首次渲染
subscribe((store) => renderApp(store));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是调用 dispatch 修改的 body' });

// import { state } from './redux/state.js';
// import { storeChange } from './redux/storeChange.js';
// import { createStore } from './redux/createStore.js';
// const { store, dispatch, subscribe } = createStore(state, storeChange)
  
// function renderHead (state){
//   console.log('head')
//   const head = document.getElementById('head')
//   head.innerText = state.text;
//   head.style.color = state.color;
// }
// function renderBody (state){
//   console.log('body')
//   const body = document.getElementById('body')
//   body.innerText = state.text;
//   body.style.color = state.color;
// }

// function renderApp (store){
//   console.log('app', store)
//   renderHead(store.head);
//   renderBody(store.body);
// }
// // 首次渲染
// // subscribe((store) => renderApp(store));
// renderApp(store);
// dispatch({ type: 'BODY_TEXT', text: '我是调用 dispatch 修改的 body' });
// renderApp(store);