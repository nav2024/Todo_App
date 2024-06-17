import { useState } from 'react';
import './Todo.css'

export default function Todo({ onTodo }) {
  const [title, setTitle] = useState('');
  return (
    <div className='todoInput'>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onTodo(title);
      }}>Add</button>
    </div>
  )
}
