// NewTodo Component
import React, { useRef, useEffect } from "react";

// Type or Interface is suitable as well
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
    useEffect(() => {
        
    }, []);

    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);
    };

    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
    </form>
};

export default NewTodo;