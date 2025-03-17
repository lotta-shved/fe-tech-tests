import { User } from "@/models/user";

export const NEW_USER: Omit<User, 'id'> = {
  firstName: '',
  lastName: '',
  email: '',
  age: 18,
  bank: {
    currency: '',
  },
  address: {
    city: '',
    country: '',
    postalCode: '',
  },
  username: ""
};