import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: ${({ theme }) => `0 0 6px 0 ${theme.taskListItem.borderColor}`};
  border-radius: 4px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
