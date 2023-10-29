import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 16px;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  display: block;
  margin-bottom: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme, hasError }) => `1px solid ${hasError ? '#FC440F' : theme.textColor}`};
  border-radius: 4px;
  color: ${({ theme }) => theme.textColor};
  max-width: 100%;
  width: 500px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #fc440f;
`;
