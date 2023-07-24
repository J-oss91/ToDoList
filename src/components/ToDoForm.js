// rce is shortcut for react boilerplate
// import React, { Component } from 'react'
// export class ToDoForm extends Component {
//   render() {
//     return (
//       <div>ToDoForm</div>
//     )
//   }
// }
// export default ToDoForm
// rconst shortcut for constructer or function with props
// constructor(props) {
//   super(props)
//   this.state = {
//      first
//   }
// }
//rfce react component boilerplate ****
// import React from 'react'
// function ToDoForm() {
//   return (
//     <div>ToDoForm</div>
//   )
// }
// export default ToDoForm
//rafce react const shortcut
import React, { useState } from 'react'
// creating the base form of our ToDo list
const ToDoForm = ({ onAddTodo }) => {
    const [todoText, setTodoText] =useState('');
    const handleInputChange = (event) =>{
        setTodoText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoText.trim() !== '') {
            onAddTodo({
                id: Date.now(),
                text: todoText.trim(),
                completed: false,
            });
            setTodoText('');
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder='New Task'
        />
        <button type='submit'>
            Add to list
        </button>
    </form>
  );
};
export default ToDoForm;