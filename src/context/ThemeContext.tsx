'use client'

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ConfigProvider } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { componentTokens, globalTokens } from '@/config/themeVariable'

type ThemeContextType = ['default' | 'dark', Dispatch<SetStateAction<'default' | 'dark'>>]
const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<'default' | 'dark'>('default')
  useEffect(() => {
    const theme = localStorage.getItem('data-theme') || 'default'
    setThemeColor(theme === 'default' ? 'default' : 'dark')
  }, [])
  const value = useMemo<ThemeContextType>(() => [themeColor, setThemeColor], [themeColor])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor)
    localStorage.setItem('data-theme', themeColor)
  }, [themeColor])

  return (
    <AntdRegistry>
      <ThemeContext.Provider value={value}>
        <ConfigProvider
          theme={{
            token: globalTokens,
            components: componentTokens,
            cssVar: true,
            hashed: true
          }}
        >
          {children}
        </ConfigProvider>
      </ThemeContext.Provider>
    </AntdRegistry>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Invalid hook call')
  }
  return context
}
