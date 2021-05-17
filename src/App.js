import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todosArr,setTodosArr] = useState([])

  return (
    <div className="App">
      <header><h1>Things To Do</h1></header>
      <TodoForm setTodosArr={setTodosArr} todosArr={todosArr}/>
      <br />
      <TodoList setTodosArr={setTodosArr} todosArr={todosArr}/>
    </div>
  );
}

export default App;
