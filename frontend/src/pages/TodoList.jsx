import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function TodoList({ todos, onAdd, onToggle, onDelete }) {
  return (
    <div>
      <TodoForm onAdd={onAdd} />
      <div style={{ marginTop: '10px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#222', marginBottom: '15px' }}>Your Tasks</h3>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#aaa', padding: '20px' }}>No tasks found. Relax or add a new one!</p>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          ))
        )}
      </div>
    </div>
  );
}