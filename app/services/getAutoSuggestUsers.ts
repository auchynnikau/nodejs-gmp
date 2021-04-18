import { usersModel, UserProps } from '../models/users';

export const getAutoSuggestUsers = (loginSubstring: string, limit: number = 10): UserProps[] => {
  return usersModel.users
    .filter((user) => user.login.includes(loginSubstring))
    .sort((a, b) => (a.login > b.login ? 1 : -1))
    .slice(0, limit);
};
