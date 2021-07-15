import { useState, useEffect, Dispatch } from 'react';
import { themeStorageKey } from '~/_config/theme';
import { LightTheme, DarkTheme } from '~/_config/theme';
import { ThemeEnum } from '~/core/enums/theme/theme.enum';

type Response<T> = {
  theme: T,
  toggleTheme: Dispatch<T>
};

function useLocalTheme<T>(initialState: T): Response<T> {

  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem(themeStorageKey);
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  const toggleTheme = () => {
    setTheme(theme.name === ThemeEnum.Light ? DarkTheme : LightTheme);
  };

  useEffect(() => {
    localStorage.setItem(themeStorageKey, JSON.stringify(theme));
  }, [theme]);

  return { theme, toggleTheme };
}

export default useLocalTheme;
