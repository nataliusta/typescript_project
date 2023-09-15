const NewTodo = () => {

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;