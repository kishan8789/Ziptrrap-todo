import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { api } from './api';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.getAll().then(setTodos);
  }, []);

  const handleAddTodo = (newTodo) => {
    api.create(newTodo).then(savedTodo => setTodos([...todos, savedTodo]));
  };

  const handleToggleTodo = (id, completed) => {
    api.update(id, { completed }).then(updatedTodo => {
      setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    });
  };

  const handleDeleteTodo = (id) => {
    api.delete(id).then(() => {
      setTodos(todos.filter(t => t.id !== id));
    });
  };

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f4f7f6',
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: '40px 20px',
        color: '#333'
      }}>
        <div style={{
          maxWidth: '650px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          padding: '40px',
        }}>
          <header style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ margin: '0 0 8px 0', color: '#1a1a1a', fontSize: '2rem', fontWeight: '700' }}>
              ZipTrrip Tasks
            </h1>
            <p style={{ margin: 0, color: '#888', fontSize: '0.95rem' }}>Manage your daily tech assignments</p>
          </header>
          
          <Routes>
            <Route path="/" element={
              <TodoList 
                todos={todos} 
                onAdd={handleAddTodo} 
                onToggle={handleToggleTodo} 
                onDelete={handleDeleteTodo} 
              />
            } />
            <Route path="/todo" element={
              <TodoDetails onBack={() => window.location.href = '/'} />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}