import { Button, Input, Main, UserList } from '@client/components';
import { useGetUsers } from '@client/hooks/useGetUsers';
import { UserSearchParams } from '@projectTypes/user';
import { ChangeEvent, useState } from 'react';

import { SearchContainer } from './Users.style';

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
      <SearchContainer>
        <Input placeholder="Search for users..." type="text" name="search" value={search.q} onChange={handleChange} />
        <Button onClick={handleClick('name')}>Sort by Name</Button>
        <Button onClick={handleClick('age')}>Sort by Age</Button>
      </SearchContainer>
      {users.length > 0 && <UserList users={users} />}
    </Main>
  );
};

export default Users;
