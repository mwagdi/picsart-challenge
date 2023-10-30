import { Button, Input, Pagination, UserList } from '@client/components';
import { useGetUsers } from '@client/hooks/useGetUsers';
import { UserSearchParams } from '@projectTypes/user';
import { ChangeEvent, MouseEvent, useState } from 'react';

import { SearchContainer } from './Users.style';

const Users = () => {
  const [search, setSearch] = useState<UserSearchParams>({
    _sort: undefined,
    _page: 1,
    q: '',
  });
  const { users, pages, loading } = useGetUsers(search);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      _page: 1,
      q: event.target.value,
    });
  };

  const handleClick = (field: 'name' | 'age') => () => {
    setSearch({
      ...search,
      _sort: field,
    });
  };

  const handlePaginationClick = (page: number) => (event: MouseEvent) => {
    event.preventDefault();
    setSearch({
      ...search,
      _page: page,
    });
  };

  return (
    <>
      <h1>Users</h1>
      <SearchContainer>
        <Input placeholder="Search for users..." type="text" name="search" value={search.q} onChange={handleChange} />
        <Button onClick={handleClick('name')}>Sort by Name</Button>
        <Button onClick={handleClick('age')}>Sort by Age</Button>
      </SearchContainer>
      {users.length > 0 && <UserList users={users} />}
      {pages > 1 && <Pagination currentPage={search._page} pages={pages} onClick={handlePaginationClick} />}
    </>
  );
};

export default Users;
