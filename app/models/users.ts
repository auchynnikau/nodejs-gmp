export interface UserProps {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export const usersMocks: UserProps[] = [
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

class UsersModel {
  private _users: UserProps[] = [...usersMocks];

  public get users(): UserProps[] {
    return this._users;
  }

  public set users(users: UserProps[]) {
    this._users = [...users];
  }
}

export const usersModel = new UsersModel();
