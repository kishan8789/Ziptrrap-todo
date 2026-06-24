import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});