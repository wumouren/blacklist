import { state } from './redux/state.js';
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';
const { store, dispatch, subscribe } = createStore(state, storeChange)
  
function renderHead (){
  const head = document.getElementById('head')
  head.innerText = store.head.text;
  head.style.color = store.head.color;
}
function renderBody (){
  const body = document.getElementById('body')
  body.innerText = store.body.text;
  body.style.color = store.body.color;
}

function renderApp (){
  renderHead();
  renderBody();
}
// 首次渲染
subscribe(() => renderApp());
subscribe(() => alert('页面刷新了'));
renderApp();
dispatch({ type: 'BODY_TEXT', text: '我是调用 dispatch 修改的 body' });