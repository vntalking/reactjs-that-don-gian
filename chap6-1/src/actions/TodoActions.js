export function createTodo(text) {
    return {
        type: "ADD_TODO",
        payload: {
            text
        }
    };
}