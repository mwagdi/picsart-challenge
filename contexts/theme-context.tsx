import * as themeMapping from '@client/themes';
import { ThemeContextType, ThemeOptions } from '@projectTypes/theme';
import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ThemeContext = createContext();

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

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeMapping[theme]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
