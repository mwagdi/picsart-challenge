import styled from 'styled-components';

export const StyledMain = styled.main`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  flex-grow: 1;
`;
