// Todo List Component
import React from "react";

// Props Interface (VERY IMPORTANT TO HAVE TO PASS PROPS)
interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
    return <ul>
        {items.map(item =>
        <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={onDeleteTodo.bind(null, item.id)}>DELETE</button>
        </li>)}
    </ul>
}

export default TodoList;