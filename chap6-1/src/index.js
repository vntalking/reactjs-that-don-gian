import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from "./components/TodoApp";

import rootReducer from './reducers';



const store = createStore(rootReducer);

// ReactDOM.render(<TodoApp />, document.getElementById("root"));
ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>, document.getElementById('root'));