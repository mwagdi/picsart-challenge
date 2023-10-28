import { ThemeProvider } from '@contexts/theme-context';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

export const renderWithProviders = (component: ReactNode) =>
  render(<ThemeProvider initialState={{ theme: 'light' }}>{component}</ThemeProvider>);
