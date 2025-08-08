'use client';

import React from 'react';

interface AppThemeProviderProps {
  children: React.ReactNode;
  isDark?: boolean;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  return <>{children}</>;
};
