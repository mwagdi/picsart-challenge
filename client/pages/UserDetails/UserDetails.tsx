import { useQuery } from '@apollo/client';
import { LoadingSpinner } from '@client/components';
import { GET_USER } from '@queries/users';
import { useLocation, useParams } from 'react-router';

import { BackLink, ProfileImage, Wrapper } from './UserDetails.style';

const UserDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_USER, { variables: { id } });
  const { search } = useLocation();

  if (loading) return <LoadingSpinner />;

  const user = data.getUser;

  return (
    <Wrapper>
      <BackLink to={`/users${search}`}>Back to users</BackLink>
      <h1>{user.name}</h1>
      <ProfileImage alt={`${user.name} profile image`} src={user.profileImageUrl} />
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </Wrapper>
  );
};

export default UserDetails;
