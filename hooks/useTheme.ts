import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      setIsDark(savedTheme ? savedTheme === 'dark' : false);
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark', 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.documentElement.setAttribute(
        'data-theme',
        isDark ? 'dark' : 'light'
      );
    }
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark(d => !d);
  return { isDark, toggleTheme, mounted };
};
