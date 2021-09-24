import { FetchStatuses, User, UsersInitialState, SortTypes } from './types';
import { usersApi } from './../api/usersApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const res = await usersApi.getUsers();
  return res.data;
});

const initialState: UsersInitialState = {
  usersStatus: FetchStatuses.IDLE,
  states: [],
  sort: [
    {
      name: SortTypes.BY_ID,
      reversed: false,
      sorted: false,
      displayName: 'id',
    },
    {
      name: SortTypes.BY_FIRST_NAME,
      reversed: false,
      sorted: false,
      displayName: 'First name',
    },
    {
      name: SortTypes.BY_LAST_NAME,
      reversed: false,
      sorted: false,
      displayName: 'Last name',
    },

    {
      name: SortTypes.BY_EMAIL,
      reversed: false,
      sorted: false,
      displayName: 'Email',
    },
    {
      name: SortTypes.BY_PHONE,
      reversed: false,
      sorted: false,
      displayName: 'Phone',
    },
    {
      name: SortTypes.BY_STATE,
      reversed: false,
      sorted: false,
      displayName: 'State',
    },
  ],
  page: 1,
  perPage: 20,
  totalItems: 0,
  users: null,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    pageChanged(state, action) {
      state.page = action.payload;
    },
    usersSorted(state, action) {
      const option = state.sort.find(
        (option) => option.name === action.payload,
      );
      option!.sorted = true;
      option!.reversed = !option!.reversed;
      state.sort.forEach((option) => {
        if (option.name !== action.payload) {
          option.sorted = false;
          option.reversed = false;
        }
        if (option.sorted) {
          if (option.name === SortTypes.BY_STATE) {
            state.users?.sort((a, b) => {
              const userA = a.adress.state.toUpperCase();
              const userB = b.adress.state.toUpperCase();
              if (userA > userB) return -1;
              if (userA < userB) return 1;
              return 0;
            });
          } else if (option.name === SortTypes.BY_ID) {
            state.users?.sort((a, b) => b.id - a.id);
          } else {
            state.users?.sort((a, b) => {
              const userA = a[option.name].toUpperCase();
              const userB = b[option.name].toUpperCase();
              if (userA > userB) return -1;
              if (userA < userB) return 1;
              return 0;
            });
          }
        }
        if (option.reversed) {
          state.users?.reverse();
        }
      });
    },
    usersFiltered(state, action) {
      let count = 0;
      state.users?.forEach((user) => {
        const name = user.firstName.toUpperCase();
        if (
          !(name.indexOf(action.payload.name.toUpperCase()) === -1) &&
          action.payload.states.includes(user.adress.state)
        ) {
          user.show = true;
          count++;
        } else {
          user.show = false;
        }
      });
      state.users?.sort((a, b) => Number(b.show) - Number(a.show));
      state.totalItems = count;
    },
  },
  extraReducers: {
    [getUsers.pending.toString()]: (state, action) => {
      state.usersStatus = FetchStatuses.LOADING;
    },
    [getUsers.fulfilled.toString()]: (state, action) => {
      state.usersStatus = FetchStatuses.SUCCESS;
      state.totalItems = action.payload.length;
      state.users = action.payload;
      state.users?.forEach((user) => {
        user.show = true;
        if (!state.states.includes(user.adress.state)) {
          state.states.push(user.adress.state);
        }
      });
    },
    [getUsers.rejected.toString()]: (state, action) => {
      state.usersStatus = FetchStatuses.ERROR;
      state.error = action.error.message;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const { pageChanged, usersSorted, usersFiltered } = usersSlice.actions;
