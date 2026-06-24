import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../api';

export default function TodoDetails({ onBack }) {
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('id');
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (todoId) {
      api.getOne(todoId).then(setTodo);
    }
  }, [todoId]);

  if (!todo) return <p style={{ textAlign: 'center', color: '#999' }}>Loading details...</p>;

  return (
    <div style={{ 
      backgroundColor: '#fafafa', 
      padding: '30px', 
      borderRadius: '12px',
      border: '1px solid #f0f0f0'
    }}>
      <button 
        onClick={onBack} 
        style={{
          backgroundColor: '#fff',
          border: '1px solid #d9d9d9',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500',
          marginBottom: '24px',
          color: '#555',
          boxShadow: '0 2px 0 rgba(0,0,0,0.016)'
        }}
      >
        ← Back to Dashboard
      </button>

      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          backgroundColor: todo.completed ? '#e6f7ff' : '#fff7e6',
          color: todo.completed ? '#1890ff' : '#fa8c16',
          marginBottom: '12px'
        }}>
          {todo.completed ? '✅ Completed' : '⏳ Pending'}
        </span>
        <h2 style={{ margin: '0 0 12px 0', color: '#111', fontSize: '1.6rem' }}>{todo.title}</h2>
      </div>

      <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Description</h4>
        <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '1.05rem' }}>
          {todo.description || 'No detailed description was added for this task.'}
        </p>
      </div>
    </div>
  );
}