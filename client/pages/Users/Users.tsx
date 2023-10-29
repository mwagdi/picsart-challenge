import { Button, Input, Main } from '@client/components';
import { useGetUsers } from '@client/hooks/useGetUsers';
import { UserSearchParams, UserType } from '@projectTypes/user';
import { ChangeEvent, useState } from 'react';

const Users = () => {
  const [search, setSearch] = useState<UserSearchParams>({
    _sort: undefined,
    q: '',
  });
  const { users } = useGetUsers(search);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      q: event.target.value,
    });
  };

  const handleClick = (field: 'name' | 'age') => () => {
    setSearch({
      ...search,
      _sort: field,
    });
  };

  return (
    <Main>
      <h1>Users</h1>
      <div>
        <Input type="text" name="search" value={search.q} onChange={handleChange} />
        <Button onClick={handleClick('name')}>Sort by Name</Button>
        <Button onClick={handleClick('age')}>Sort by Age</Button>
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
