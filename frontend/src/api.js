const API_URL = 'http://localhost:5000/api/todos';

export const api = {
  getAll: () => fetch(API_URL).then(res => res.json()),
  getOne: (id) => fetch(`${API_URL}/${id}`).then(res => res.json()),
  create: (todo) => fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  }).then(res => res.json()),
  update: (id, updates) => fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  }).then(res => res.json()),
  delete: (id) => fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(res => res.json())
};