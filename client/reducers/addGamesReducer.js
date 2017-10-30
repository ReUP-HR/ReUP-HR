export default function (state = null, action) {
  switch (action.type) {
  case 'ADD_GAMES':
    return action.payload;
    break;
  }
  return state;
}