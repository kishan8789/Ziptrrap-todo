import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      backgroundColor: '#f9fbfb',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #eef2f2',
      marginBottom: '30px'
    }}>
      <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#444' }}>Create New Task</h3>
      
      <input 
        type="text" 
        placeholder="Task title..." 
        value={title} 
        onChange={e => setTitle(e.target.value)}
        required 
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #dcdcdc',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
      />
      <input 
        type="text" 
        placeholder="Short description..." 
        value={description} 
        onChange={e => setDescription(e.target.value)}
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #dcdcdc',
          fontSize: '1rem',
          outline: 'none'
        }}
      />
      <button type="submit" style={{
        padding: '12px',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 112, 243, 0.2)',
        transition: 'background-color 0.2s'
      }}>
        + Add Task
      </button>
    </form>
  );
}