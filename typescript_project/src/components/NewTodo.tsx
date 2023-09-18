import { useRef } from 'react';

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;