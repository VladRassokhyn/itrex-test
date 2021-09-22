import React, { useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from './store/useTypedSelector';
import {
  selectUsers,
  selectUsersStatuses,
  selectPaginationOptions,
} from './store/usersSelectors';
import { useDispatch } from 'react-redux';
import { getUsers, pageChanged, usersSorted } from './store/usersSlice';
import { Table } from './Components/Table/Table';
import { FetchStatuses } from './store/types';
import { Paginator } from './Components/Paginator/Paginator';
import { UsersFilters } from './Components/UsersFilters/UsersFilters';
import { Profile } from './Components/Profile/Profile';

export const App = () => {
  const dispatch = useDispatch();
  const users = useTypedSelector(selectUsers);
  const [profile, setProfile] = useState(users ? users[0] : null);
  const { usersStatus } = useTypedSelector(selectUsersStatuses);
  const { page, perPage, totalItems } = useTypedSelector(
    selectPaginationOptions,
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handlerChangePage = useCallback((page: number) => {
    dispatch(pageChanged(page));
  }, []);

  const handleSortBy = useCallback((sortOption) => {
    dispatch(usersSorted(sortOption));
  }, []);

  if (usersStatus === FetchStatuses.LOADING) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <UsersFilters />
      {users && (
        <Table users={users} onSort={handleSortBy} setProfile={setProfile} />
      )}
      <Paginator
        totalItems={totalItems}
        perPage={perPage}
        page={page}
        onChange={handlerChangePage}
      />
      {profile && <Profile profile={profile} />}
    </div>
  );
};
