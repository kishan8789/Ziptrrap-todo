import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '16px 20px', 
      backgroundColor: todo.completed ? '#fcfcfc' : '#ffffff',
      border: '1px solid #eaeaea', 
      marginBottom: '12px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      transition: 'all 0.2s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id, !todo.completed)} 
          style={{
            width: '18px',
            height: '18px',
            cursor: 'pointer',
            accentColor: '#0070f3'
          }}
        />
        <span 
          style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none', 
            color: todo.completed ? '#aaa' : '#333',
            cursor: 'pointer',
            fontSize: '1.05rem',
            fontWeight: '500',
            flex: 1
          }} 
          onClick={() => window.location.href = `/todo?id=${todo.id}`}
        >
          {todo.title}
        </span>
      </div>
      
      <button 
        onClick={() => onDelete(todo.id)} 
        style={{ 
          backgroundColor: 'transparent',
          color: '#ff4d4f', 
          border: 'none',
          padding: '6px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#fff1f0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Delete
      </button>
    </div>
  );
}