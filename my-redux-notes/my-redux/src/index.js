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