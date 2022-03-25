import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
   const INITIAL_STATE = {
      task: ""
   }
   const [formData, setFormData] = useState(INITIAL_STATE);
   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(formData => ({
         ...formData,
         [name]: value
      }));
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      const { task } = formData;
      addTodo(task);
      setFormData(INITIAL_STATE);
   }
   return (
      <div>
         <h2>Add Todo</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Enter Todo: </label>
            <input 
               id="todo" 
               type="text" 
               name="task" 
               autoComplete="off" 
               placeholder="enter todo" 
               value={formData.task} 
               onChange={handleChange}
               required
            />
            <button>Add todo</button>
         </form>
      </div>
   )
}

export default NewTodoForm;