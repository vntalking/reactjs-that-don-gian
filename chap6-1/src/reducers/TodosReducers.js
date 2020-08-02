let todos = [];

export default function todosReducer(state = todos, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      default:
        return state;
    }
}