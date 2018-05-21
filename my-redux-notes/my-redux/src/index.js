const store = {
  head: {
    text: '我是头部',
    color: 'red'
  },
  body: {
    text: '我是body',
    color: 'green'
  }
}

function renderHead (){
  const head = document.getElementById('head')
  head.innerText = store.head.text + '--' + store.body.text;
  dispatch({type: 'BODY_TEXT', text: '我是 head 经过调用 dispatch 修改后的 body'})
  head.style.color = store.head.color;
}
function renderBody (){
  const body = document.getElementById('body')
  body.innerText = store.body.text;
  body.style.color = store.body.color;
}
function dispatch(action) {
  switch (action.type) {
    case 'HEAD_COLOR':
      store.head.color = action.color
      break
    case 'BODY_TEXT':
      store.body.text = action.text
      break
    default:
      break
  }
}
function renderApp (){
  renderHead();
  renderBody();
}
renderApp();