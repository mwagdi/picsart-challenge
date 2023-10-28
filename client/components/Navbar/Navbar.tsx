import { Switcher } from '@client/components';

import { Link, LinkList, StyledNav } from './Navbar.style';

export const Navbar = () => (
  <StyledNav>
    <LinkList>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </LinkList>
    <Switcher />
  </StyledNav>
);
