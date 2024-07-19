import { OverrideToken, AliasToken } from 'antd/es/theme/interface'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const globalTokens: Partial<AliasToken> = {
  fontFamily: inter.style.fontFamily,
  lineWidthFocus: 0,
  controlOutline: 'var(--primary-200)',
  controlOutlineWidth: 1,
  borderRadius: 2,
  colorText: 'var(--neutral-950)',
  colorPrimary: 'var(--primary-500)',
  colorPrimaryBg: 'var(--primary-50)',
  colorPrimaryBgHover: 'var(--primary-100)',
  colorPrimaryBorder: 'var(--primary-200)',
  colorPrimaryBorderHover: 'var(--primary-300)',
  colorPrimaryHover: 'var(--primary-300)',
  colorPrimaryActive: 'var(--primary-600)',
  colorPrimaryTextHover: 'var(--primary-400)',
  colorPrimaryText: 'var(--primary-500)',
  colorPrimaryTextActive: 'var(--primary-600)'
}

export const componentTokens: OverrideToken = {
  Button: {
    colorPrimaryBg: 'var(--primary-50)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--primary-300)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    defaultShadow: 'none',
    primaryShadow: 'none'
  },
  Select: {
    colorBgElevated: 'var(--neutral-0)',
    colorTextDisabled: 'var(--neutral-200)',
    selectorBg: 'var(--neutral-0)',
    colorBorder: 'var(--neutral-600)',
    colorText: 'var(--neutral-900)',
    colorPrimaryBg: 'var(--primary-0)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--primary-300)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    optionSelectedBg: 'var(--primary-100)',
    colorTextPlaceholder: 'var(--neutral-500)'
  },
  Layout: {
    siderBg: 'var(--neutral-50)',
    headerBg: 'var(--neutral-50)',
    bodyBg: 'var(--neutral-100)',
    triggerBg: 'var(--primary-500)'
  },
  Menu: {
    colorBgBase: 'var(--neutral-50)',
    itemBg: 'var(--neutral-50)',
    itemSelectedColor: 'var(--white)',
    itemSelectedBg: 'var(--primary-500)',
    horizontalItemSelectedColor: 'var(--neutral-950)',
    horizontalItemHoverColor: 'var(--neutral-950)'
  }
}
