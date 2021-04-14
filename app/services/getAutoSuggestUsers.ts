import { users, UserProps } from '../models/users';

export const getAutoSuggestUsers = (loginSubstring: string, limit: number): UserProps[] => {
  return users
    .filter((user) => user.login.startsWith(loginSubstring))
    .sort((a, b) => (a.login > b.login ? 1 : -1))
    .slice(0, limit);
};
