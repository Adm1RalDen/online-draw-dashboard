export type UserReducerInitialTypes = {
  isAuth: boolean;
  isLoading: boolean;
  error: undefined | string;
  token: undefined | string;
  data: {
    id: string;
    avatar: string;
    backgroundFon: string;
    name: string;
    age: string;
    role: string;
    email: string;
    country: string;
    city: string;
    color: string;
    gender: string;
    date: string;
    biography: string;
  };
};
