import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [newItem, setNewItem] = useState("asfasd")
  // setNewItem("test")
  const [todo, setTodo] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodo((currentTodo) => {
      return[
        ...currentTodo, {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("")
  }

  function toggleTodo(id, completed){
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id){
          return { ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div>
          <label htmlFor="item">Add item to do</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
          <button className="btn-submit">Add</button>
        </div>
      </form>

        <ul className="list">
          {todo.map(todo => {
            return (
            <li key={todo.id}>
              <label>
                <input checked={todo.completed} type="checkbox" onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn-dismiss">Dismiss</button>
            </li>
            )
          })}
        </ul>
    </>
  );
}

