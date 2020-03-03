import React, { useState, useEffect } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        if (saved) {
            setTodos(saved)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }


    const toggleHandler = (id: number): void => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    todo = {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            }));
    };

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure to remove this item?');
        if (shouldRemove) {
            setTodos(prev => prev
                .filter(todo => todo.id !== id))
        }
    }
    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onToggleTodo={toggleHandler}
                onRemove={removeHandler}
            />
        </>)
};
