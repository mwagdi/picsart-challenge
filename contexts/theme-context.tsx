import * as themeMapping from '@client/themes';
import { ThemeContextType, ThemeOptions } from '@projectTypes/theme';
import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider: FC<{ children: ReactNode; initialState: ThemeContextType }> = ({
  children,
  initialState,
}) => {
  const [theme, setTheme] = useState<ThemeOptions>(initialState.theme);
  const [_, setSearchParams] = useSearchParams();

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setSearchParams({ theme: newTheme });
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeMapping[theme]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
