// Todos Controller Module
import { RequestHandler } from "express";
import { Todo } from "../models/todo"; // From Models

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const newTodo = new Todo(Math.random().toString(), (req.body as {text: string}).text);
    TODOS.push(newTodo);
    res.status(201).json({message: "Created the todo.", createdTodo: newTodo})
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: TODOS })
};

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoIndex = TODOS.findIndex(todo => todo.id === req.params.id);

    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, (req.body as {text: string}).text);
    res.json({ message: "Updated!", updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoIndex = TODOS.findIndex(todo => todo.id === req.params.id);

    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }

    TODOS.splice(todoIndex, 1);
    res.json({ message: "Todo deleted!" });
};