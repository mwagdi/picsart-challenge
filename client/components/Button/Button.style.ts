import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'regular' | 'danger' }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme, variant }) => theme.button[variant].backgroundColor};
  color: ${({ theme, variant }) => theme.button[variant].textColor};
`;
