import './App.css'
import Header from './Components/Header'
import Editor from './Components/Editor'
import List from './Components/List'
import { useState, useRef } from 'react'
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "studying react",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "laundry",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "going to the gym",
    date: new Date().getTime(),
  },
];

function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => todo.id === targetId ? {
      ...todo,
      isDone: !todo.isDone,
    } : todo));
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }
  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}


export default App;