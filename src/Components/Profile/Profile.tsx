import { User } from '../../store/types';
import './profile.css';

type Props = {
  profile: User;
};

export const Profile = (props: Props) => {
  const { profile } = props;
  return (
    <div className={'profile__wrapper'}>
      <h1>
        Profile: {profile.firstName} {profile.lastName}
      </h1>
      <h1>Description: {profile.description}</h1>
      <h1>Adress: {profile.adress.streetAddress}</h1>
      <h1>City: {profile.adress.city}</h1>
      <h1>State: {profile.adress.state}</h1>
      <h1>Index: {profile.adress.zip}</h1>
    </div>
  );
};
