import { Router } from 'express';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface UserProps {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;

  return res.send(users.find(({ id }: UserProps) => id === userId));
});

router.post('/', (req: Request, res: Response) => {
  const { users } = req.context.models;
  const id = uuidv4();
  const user = {
    ...req.body,
    id,
  };
  const updatedUsers = [...users, user];

  return res.send(updatedUsers);
});

router.put('/:userId', (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;
  const updatedUsers = users.map((user: UserProps) => (user.id === userId ? req.body : user));

  return res.send(updatedUsers);
});

router.delete('/:userId', (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;
  const updatedUsers = users.map((user: UserProps) => (user.id === userId ? { ...user, isDeleted: true } : user));

  return res.send(updatedUsers);
});

export default router;
