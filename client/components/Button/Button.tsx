import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'regular' | 'danger';
}

export const Button = ({ variant = 'regular', children, ...restProps }: ButtonProps) => (
  <StyledButton variant={variant} {...restProps}>
    {children}
  </StyledButton>
);
