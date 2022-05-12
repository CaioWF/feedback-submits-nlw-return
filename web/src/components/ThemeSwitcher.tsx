import { PaletteSwitch } from '@trautmann/theme-switch';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mode, setMode] = useState<'dark' | 'light'>(localStorage.theme || 'light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setMode('dark')
      document.documentElement.classList.add('dark')
    } else {
      setMode('light')
      document.documentElement.classList.remove('dark')
    }
  });

  function handleSwitchTheme(theme: 'dark' | 'light') {
    setMode(theme)
    localStorage.theme = theme
  }

  return (
    <div className="max-w-[86px] absolute top-2 right-2 md:bottom-4 md:right-4">
      <PaletteSwitch size="large" onChange={handleSwitchTheme} value={mode} />
    </div>
  );
}