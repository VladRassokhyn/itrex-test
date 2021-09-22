import { SortTypes, User } from '../../store/types';
import { TableHead } from './TableHead';
import './table.css';
import { TableRow } from './TableRow';

type Props = {
  users: User[];
  onSort: (sortOption: SortTypes) => void;
  setProfile: any;
};

export const Table = (props: Props) => {
  const { users, onSort, setProfile } = props;
  return (
    <div className={'table__wrapper'}>
      <TableHead onSort={onSort} />
      {users.map(
        (user, i) =>
          user.show && (
            <TableRow
              key={user.email}
              user={user}
              even={i % 2 !== 0}
              setProfile={setProfile}
            />
          ),
      )}
    </div>
  );
};
