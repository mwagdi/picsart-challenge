import { UserType } from '@projectTypes/user';

import { Heading, ListItem, StyledLink } from './UserListItem.style';

export const UserListItem = ({ user: { id, name, age, email } }: { user: UserType }) => (
  <ListItem>
    <StyledLink to={`/users/${id}`}>
      <Heading>{name}</Heading>
      <span>Age: {age}</span>
      <span>Email: {email}</span>
    </StyledLink>
  </ListItem>
);
