import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // should be the first line, Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/', (req: Request, res: Response) => {
   res.send('hello world');
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.send({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
