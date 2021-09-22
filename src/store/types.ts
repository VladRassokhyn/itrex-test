interface S {
  [key: string]: any;
}

export interface User extends S {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
  show: boolean;
}

export type UsersInitialState = {
  usersStatus: FetchStatuses;
  page: number;
  perPage: number;
  sort: SortOption[];
  totalItems: number;
  users: User[] | null;
  error: string;
  states: string[];
};

type SortOption = {
  name: SortTypes;
  reversed: boolean;
  sorted: boolean;
  displayName: string;
};

export enum FetchStatuses {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export enum SortTypes {
  BY_ID = 'id',
  BY_FIRST_NAME = 'firstName',
  BY_LAST_NAME = 'lastName',
  BY_EMAIL = 'email',
  BY_PHONE = 'phone',
  BY_STATE = 'state',
}
