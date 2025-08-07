import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference (only on client side)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      } else {
        // Default to light mode
        setIsDark(false);
      }
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes (only on client side)
    if (typeof window !== 'undefined') {
      // Remove both classes first
      document.documentElement.classList.remove('dark', 'light');

      // Add the appropriate class
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }

      // Save to localStorage
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      // Also set data attribute for better mobile support
      document.documentElement.setAttribute(
        'data-theme',
        isDark ? 'dark' : 'light'
      );
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};
