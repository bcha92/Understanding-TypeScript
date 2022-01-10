// App Component // React.js TypeScript Demo
import React, { useState } from "react";
/* For some modules like react-router-dom,
regular and @types installation must occur
1. "npm install --save react-router-dom"
2. "npm install --save-dev @types/react-router-dom" */
// import { Route } from "react-router-dom";

// Child Components
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

// Modules
import { Todo } from "./todo.model";

// Components must have a React.FC (Function Component) type
// or a .ClassicComponent type
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return <div className="App">
    {/* A component that adds todos */}
    <NewTodo onAddTodo={todoAddHandler} />
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
  </div>
};

export default App;