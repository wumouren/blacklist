// export const storeChange = (store, action) => {
//   switch (action.type) {
//     case 'HEAD_COLOR':
//       store.head.color = action.color
//       return { 
//         ...store,  
//         head: { 
//           ...store.head, 
//           color: action.color 
//         }
//       }
//     case 'BODY_TEXT':
//       return { 
//         ...store,
//         body: {
//           ...store.body,
//           text: action.text
//         }
//       }
//     default:
//       return { ...store }
//   }
// }
export const storeChange = (store, action) => {
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