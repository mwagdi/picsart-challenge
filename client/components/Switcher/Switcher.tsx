import { useTheme } from '@contexts/theme-context';

import { SwitcherState, Wrapper } from './Switcher.style';

export const Switcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    if (toggleTheme) {
      toggleTheme();
    }
  };
  return (
    <Wrapper role="switch" onClick={handleClick} on={`${theme === 'dark'}`}>
      <SwitcherState>{theme === 'light' ? 'Light' : 'Dark'}</SwitcherState>
    </Wrapper>
  );
};
