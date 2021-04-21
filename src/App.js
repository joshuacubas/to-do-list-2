import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm'

function App() {
  const [state,setState] = useState([])

  return (
    <div className="App">
      <header><h1>Things To Do List</h1></header>
      <br />
      <TodoForm setStateArr={setState}/>
    </div>
  );
}

export default App;
