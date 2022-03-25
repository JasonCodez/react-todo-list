import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
   const [todos, setTodos] = useState([]);
   const addTodo = (task) => {
      setTodos(todos => [...todos, {id: uuid(), task}]);
   }
   return (
      <div>
         <h3>My Todo List</h3>
         <NewTodoForm addTodo={addTodo} />
         <div>
            {todos.map(({id, task}) => <Todo id={id} task={task} key={id}/>)}
         </div>
      </div>
   )
}

export default TodoList;