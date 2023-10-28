import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 16px;
`;

export const StyledInput = styled.input`
  display: block;
  margin-bottom: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => `1px solid ${theme.textColor}`};
  border-radius: 4px;
  color: ${({ theme }) => theme.textColor};
  max-width: 100%;
  width: 500px;
`;
