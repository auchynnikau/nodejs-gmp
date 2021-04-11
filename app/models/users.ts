export interface UserProps {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export const users: UserProps[] = [
  {
    id: '1',
    login: 'username1',
    password: '12345',
    age: 25,
    isDeleted: true,
  },
  {
    id: '2',
    login: 'username2',
    password: '12345',
    age: 22,
    isDeleted: false,
  },
  {
    id: '3',
    login: 'username3',
    password: '12345',
    age: 24,
    isDeleted: false,
  },
  {
    id: '4',
    login: 'username4',
    password: '12345',
    age: 26,
    isDeleted: false,
  },
];
