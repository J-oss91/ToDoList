import React from 'react'
//  import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToDoList from './pages/ToDoList';
import './App.css';
const App = () => {
  return (
    <div className='app'>
      <ToDoList />
    </div>
  );
};
export default App;