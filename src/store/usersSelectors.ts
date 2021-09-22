import { RootState } from './store';

export const selectUsers = (state: RootState) => {
  const page = state.users.page;
  const perPage = state.users.perPage;
  const start = page * perPage - perPage;
  const end = start + perPage;
  return state.users.users?.slice(start, end);
};

export const selectUsersStatuses = (state: RootState) => ({
  usersStatus: state.users.usersStatus,
});

export const selectPaginationOptions = (state: RootState) => ({
  page: state.users.page,
  perPage: state.users.perPage,
  totalItems: state.users.totalItems,
});

export const selectSortOptions = (state: RootState) => state.users.sort;

export const selectStates = (state: RootState) => state.users.states;
