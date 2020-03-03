import React, { useState } from 'react';

import { TodoFormProps } from '../interfaces';

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && title.trim()) {
            onAdd(title.trim());
            setTitle('');
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                type="text"
                id="title"
                placeholder=" What needs to be done?"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label
                htmlFor="title"
                className="active">
                What needs to be done?
            </label>
        </div>
    );
}