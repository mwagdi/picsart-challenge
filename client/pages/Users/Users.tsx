import { Input, Main } from '@client/components';
import { useGetUsers } from '@client/hooks/useGetUsers';
import { UserType } from '@projectTypes/user';
import { ChangeEvent, useState } from 'react';

const Users = () => {
  const [search, setSearch] = useState<string>('');
  const { users } = useGetUsers(search);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Main>
      <h1>Users</h1>
      <div>
        <Input type="text" name="search" value={search} onChange={handleChange} />
      </div>
      <ul>
        {users.map((user: UserType) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Main>
  );
};

export default Users;
