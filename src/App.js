import './App.css';
import React,{useState} from 'react';
import Todofrom from './Todofrom';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
    <Todofrom saveTodo={console.warn}/>
    </>
  );
}


export default App;