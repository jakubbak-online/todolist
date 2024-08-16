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
            <li>
              <label>
                <input checked={todo.completed} type="checkbox"/>
                {todo.title}
              </label>
              <button className="btn-dismiss">Dismiss</button>
            </li>
            )
          })}
        </ul>
    </>
  );
}

