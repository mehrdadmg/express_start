import { Router, Request, Response } from 'express';

import { authMiddleware, validationMiddleware } from '../middlewares';
import getAllUsers from './usersServices';
import UserCreateDto from './dtos/userCreateDto';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  getAllUsers(req, res);
});

router.post('/:id', validationMiddleware(UserCreateDto), (req: Request, res: Response) => {
  res.send(200);
});

router.put('/:id', (req: Request, res: Response) => {
  res.send('Hello World!*****');
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;
