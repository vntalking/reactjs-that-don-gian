// Default theme is gray
let color = {};

export default function themeReducer(state = color, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
        state = action.payload;
        console.log('themeReducer: ' + JSON.stringify(state))
      return Object.assign({}, state, {
        color: action.payload.color
      });
    default:
      return color;
  }
}