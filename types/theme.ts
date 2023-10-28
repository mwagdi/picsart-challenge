import { Dispatch, SetStateAction } from 'react';

export type ThemeOptions = 'light' | 'dark';
export type ThemeContextType = {
  theme: ThemeOptions;
  toggleTheme?: () => void;
};
