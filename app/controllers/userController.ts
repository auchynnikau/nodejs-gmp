import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { UserProps } from '../models/users';

export const getUsers = (req: Request, res: Response) => {
  return res.send(Object.values(req.context.models.users));
};

export const getUserById = (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;

  return res.send(users.find(({ id }: UserProps) => id === userId));
};

export const createUser = (req: Request, res: Response) => {
  const { users } = req.context.models;
  const id = uuidv4();
  const user = {
    ...req.body,
    id,
  };
  const updatedUsers = [...users, user];

  return res.send(updatedUsers);
};

export const updateUser = (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;
  const updatedUsers = users.map((user: UserProps) => (user.id === userId ? req.body : user));

  return res.send(updatedUsers);
};

export const deleteUser = (req: Request, res: Response) => {
  const { users } = req.context.models;
  const { userId } = req.params;
  const updatedUsers = users.map((user: UserProps) => (user.id === userId ? { ...user, isDeleted: true } : user));

  return res.send(updatedUsers);
};