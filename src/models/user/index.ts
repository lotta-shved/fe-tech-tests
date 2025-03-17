export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  age: number;
  bank: {
    currency: string;
  };
  address: {
    city: string;
    postalCode: string;
    country: string;
  }
}

export interface UsersResponse {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}
