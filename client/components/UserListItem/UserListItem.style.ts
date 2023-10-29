import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.userListItem.textColor};
  background-color: ${({ theme }) => theme.userListItem.backgroundColor};
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h3`
  margin-top: 0;
`;
