import { useQuery } from '@apollo/client';
import { Main } from '@client/components';
import { UserType } from '@projectTypes/user';
import { GET_USERS } from '@queries/users';

const Users = () => {
  const { data } = useQuery(GET_USERS);
  return (
    <Main>
      <h1>Users</h1>
      <div></div>
      <ul>
        {data.users.map((user: UserType) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Main>
  );
};

export default Users;
