import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  box-shadow: ${({ theme }) => `0px 0px 13px ${theme.navbar.border}`};
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;

export const Link = styled(NavLink)`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.link.textColor};
  padding: 8px;
  border-radius: 4px;

  &.active {
    color: ${({ theme }) => theme.link.active.textColor};
    background-color: ${({ theme }) => theme.link.active.backgroundColor};
  }
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
