import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import usersControllers from './users/usersControllers';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', usersControllers);

const port = parseInt(process.env.APP_PORT || '4000');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
