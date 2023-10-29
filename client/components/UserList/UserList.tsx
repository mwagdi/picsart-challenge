import { UserListItem } from '@client/components';
import { UserType } from '@projectTypes/user';

import { List } from './UserList.style';

export const UserList = ({ users }: { users: UserType[] }) => (
  <List>
    {users.map((user) => (
      <UserListItem key={user.id} user={user} />
    ))}
  </List>
);
