// import React,{useState} from 'react'

// const Todofrom = ({saveTodo}) => {
//     const [value, setValue] = useState('')
    
//   return (
//     <form onSubmit={(e)=>e.preventDefault()} >
//         <input type="text" name='text' placeholder='Add Your List' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
//     </form>
//   )
// }

// export default Todofrom;

// import React, { useState } from 'react';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [{ inputValue }, setInputValue] = useState({ inputValue: '' });

//   const handleInputChange = (event) => {
//     setInputValue({ inputValue: event.target.value });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (!inputValue.trim()) {
//       return;
//     }
//     setTodos(todos => [...todos, { text: inputValue, completed: false }]);
//     setInputValue({ inputValue: '' });
//   };

//   const handleDelete = (index) => {
//     setTodos(todos => todos.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTodos(todos => todos.map((todo, i) => {
//       if (i === index) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     }));
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleComplete(index)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

import React, { useState, useEffect } from 'react';
import './Todo.css'

const TodoApp=()=> {


  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });



  const [{ inputValue }, setInputValue] = useState({ inputValue: '' });

  const handleInputChange = (event) => {
    setInputValue({ inputValue: event.target.value });
  };


  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   if (!inputValue.trim()) {
  //     return;
  //   }
  //   setTodos(todos => [...todos, { text: inputValue, completed: false }, ...todos]);
  //   setInputValue({ inputValue: '' });
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setTodos(todos => [{ text: inputValue, completed: false }, ...todos]);
    setInputValue({ inputValue: '' });
  };


  const handleDelete = (index) => {
    setTodos(todos => todos.filter((_, i) => i !== index));
  };



  const handleToggleComplete = (index) => {
    setTodos(todos => todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className='head'>
      <h5>Listen To Your Heart:)</h5>
      <h1>What's Your Plane Today</h1>
      <div className="f-form"> 
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      </div>

      <div className='ul'>
        {todos.map((todo, index) => (
          <div className='next' key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default TodoApp;
