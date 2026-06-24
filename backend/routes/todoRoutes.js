import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();
const DATA_PATH = path.resolve('data/todos.json');

// Helper to read data
async function getTodos() {
  const data = await fs.readFile(DATA_PATH, 'utf-8');
  return JSON.parse(data);
}

// Helper to write data
async function saveTodos(todos) {
  await fs.writeFile(DATA_PATH, JSON.stringify(todos, null, 2));
}

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// GET single todo by ID
router.get('/:id', async (req, res) => {
  try {
    const todos = await getTodos();
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todo' });
  }
});

// POST a new todo
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const todos = await getTodos();
    const newTodo = {
      id: Date.now().toString(),
      title,
      description: description || '',
      completed: false
    };
    todos.push(newTodo);
    await saveTodos(todos);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save todo' });
  }
});

// PUT update a todo
router.put('/:id', async (req, res) => {
  try {
    const todos = await getTodos();
    const index = todos.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Todo not found' });

    todos[index] = { ...todos[index], ...req.body };
    await saveTodos(todos);
    res.json(todos[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
  try {
    let todos = await getTodos();
    todos = todos.filter(t => t.id !== req.params.id);
    await saveTodos(todos);
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

export default router;  