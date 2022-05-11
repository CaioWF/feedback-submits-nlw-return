import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
