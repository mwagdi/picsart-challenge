import { InputHTMLAttributes } from 'react';

import { StyledInput } from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = (props: InputProps) => <StyledInput {...props} />;
