import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm'

function App() {
  const [todosArr,setTodosArr] = useState([])

  return (
    <div className="App">
      <header><h1>Things To Do List</h1></header>
      <br />
      <TodoForm setTodosArr={setTodosArr} todosArr={todosArr}/>
    </div>
  );
}

export default App;
