import { state } from './state/state.js';
import { stateChange } from './state/stateChange.js';
import { createStore } from './redux/createStore.js';
const { store, dispatch } = createStore(state, stateChange)
  
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
renderApp();
dispatch({ type: 'BODY_TEXT', text: '我是调用 dispatch 修改的 body' })
console.log("store==",store)