import { useParams } from 'react-router';

const UserDetails = () => {
  const { id } = useParams();

  return <div>User ID: {id}</div>;
};

export default UserDetails;
