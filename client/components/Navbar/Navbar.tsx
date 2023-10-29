import { Switcher } from '@client/components';
import { useLocation } from 'react-router';

import { Link, LinkList, StyledNav } from './Navbar.style';

export const Navbar = () => {
  const { search } = useLocation();
  return (
    <StyledNav>
      <LinkList>
        <li>
          <Link to={`/${search}`}>Home</Link>
        </li>
        <li>
          <Link to={`/users${search}`}>Users</Link>
        </li>
      </LinkList>
      <Switcher />
    </StyledNav>
  );
};
