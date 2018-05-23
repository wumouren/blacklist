export const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEAD_COLOR':
      store.head.color = action.color
      return { ...store }
    case 'BODY_TEXT':
      store.body.text = action.text
      return { ...store }
    default:
      return { ...store }
  }
}