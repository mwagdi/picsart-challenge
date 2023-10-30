import styled from 'styled-components';

export const PaginationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 32px;
`;
export const PaginationButton = styled.button`
  border: none;
  background: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.pagination.textColor};

  &:disabled {
    cursor: auto;
    color: ${({ theme }) => theme.pagination.disabled.textColor};
    background: ${({ theme }) => theme.pagination.disabled.backgroundColor};
  }
`;
