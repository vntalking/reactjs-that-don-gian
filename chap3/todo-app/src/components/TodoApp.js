import React from "react";
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </div>
        );
    }
}
export default TodoApp;