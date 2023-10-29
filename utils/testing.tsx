import { ThemeProvider } from '@contexts/theme-context';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProviders = (component: ReactNode) =>
  render(
    <BrowserRouter>
      <ThemeProvider initialState={{ theme: 'light' }}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
