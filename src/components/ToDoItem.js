//rafce shortcut
import React from 'react'
const todoItem = ({todo, onToggleTodo}) => {
    const{ id, text, completed}= todo;
  return (
    <div className={`todo-item ${completed ? 'completed': ''}`}>
        <input
        type='checkbox'
        checked={completed}
        onChange={() => onToggleTodo(id)}
        />
        <span>{text}</span>
    </div>
  )
}
export default todoItem;