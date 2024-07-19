'use client'

import { Button } from 'antd'
import { useTheme } from '@/context/ThemeContext'
import './ThemeSwitcher.scss'

export default function ThemeSwitcher() {
  const [, setTheme] = useTheme()
  return (
    <div className="theme-switcher">
      <Button type="primary" onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button type="primary" onClick={() => setTheme('default')}>
        Default
      </Button>
    </div>
  )
}
