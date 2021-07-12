import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { themeStorageKey } from '~/_config/theme';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function useLocalTheme<T>(initialState: T): Response<T> {

  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem(themeStorageKey);
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(themeStorageKey, JSON.stringify(theme));
  }, [theme]);

  return [theme, setTheme];
}

export default useLocalTheme;
