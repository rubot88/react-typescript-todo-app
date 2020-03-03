import React from 'react';

import { TodoListProps } from '../interfaces';

import { ITodo } from '../interfaces';


export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onToggleTodo,
    onRemove
}) => {

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    }

    const list = todos.map(({ id, title, completed }: ITodo) => {
        const classes: string[] = ['todo'];
        if (completed) {
            classes.push('completed');
        }
        return (
            <li
                className={`mb-1 ${classes.join(' ')}`}
                key={id}
            >
                <label className="px-1">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => onToggleTodo(id)}
                    />
                    <span>{title}</span>
                    <i
                        className="material-icons red-text"
                        onClick={event => removeHandler(event, id)}
                    >delete</i>
                </label>
            </li>
        );
    })
    if (todos.length === 0) {
        return <p className="center">There are no items to show!</p>
    }
    return (
        <ul >
            {list}
        </ul>
    );
}