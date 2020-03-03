export interface TodoFormProps {
    onAdd(title: string): void

}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoListProps {
    todos: ITodo[];
    onToggleTodo(id: number): void;
    onRemove(id: number): void;
}