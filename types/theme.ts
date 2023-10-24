import { Dispatch, SetStateAction } from 'react';

export type ThemeOptions = 'light' | 'dark';
export type ThemeContextType = {
  theme: ThemeOptions;
  setTheme?: Dispatch<SetStateAction<ThemeOptions>>;
};
