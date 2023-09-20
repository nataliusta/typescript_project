import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
