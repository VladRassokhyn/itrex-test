import { User } from '../../store/types';

type Props = {
  user: User;
  even: boolean;
  setProfile: any;
};

export const TableRow = (props: Props) => {
  const { user, even, setProfile } = props;

  return (
    <div
      className={`table__row ${even && 'table__row-dark'}`}
      onClick={() => setProfile(user)}
    >
      <div className={'table__cell'}>{user.id}</div>
      <div className={'table__cell'}>{user.firstName}</div>
      <div className={'table__cell'}>{user.lastName}</div>
      <div className={'table__cell table__cell-email'}>{user.email}</div>
      <div className={'table__cell'}>{user.phone}</div>
      <div className={'table__cell'}>{user.adress.state}</div>
    </div>
  );
};
