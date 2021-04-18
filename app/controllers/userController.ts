import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { usersModel, UserProps } from '../models/users';
import { getAutoSuggestUsers } from '../services/getAutoSuggestUsers';

export const getUsers = (req: Request, res: Response) => {
  const { login, limit } = req.params;

  if (login) {
    return res.send(getAutoSuggestUsers(login, Number(limit)));
  }

  return res.send(usersModel.users);
};

export const getUserById = (req: Request, res: Response) => {
  const { userId } = req.params;

  return res.send(usersModel.users.find(({ id }: UserProps) => id === userId));
};

export const createUser = (req: Request, res: Response) => {
  const id = uuidv4();
  const user = {
    ...req.body,
    id,
  };
  const updatedUsers = [...usersModel.users, user];
  usersModel.users = [...updatedUsers];

  return res.send(updatedUsers);
};

export const updateUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  const updatedUsers = usersModel.users.map((user: UserProps) => (user.id === userId ? req.body : user));
  usersModel.users = [...updatedUsers];

  return res.send(updatedUsers);
};

export const deleteUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  const updatedUsers = usersModel.users.map((user: UserProps) =>
    user.id === userId ? { ...user, isDeleted: true } : user,
  );

  usersModel.users = [...updatedUsers];

  return res.send(updatedUsers);
};
