import type { Metadata } from 'next'
import Image from 'next/image'
import { Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import './dashboard.scss'

export const metadata: Metadata = {
  title: 'NextJS + Sass',
  description: 'NextJS, Ant Design and Sass boilerplate'
}

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`
}))

const items2: MenuProps['items'] = [1, 2, 3].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider>
          <Layout className="dashboard__layout">
            <Sider className="dashboard__sider" breakpoint="lg" collapsible>
              <Menu
                className="dashboard__sider__menu"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items2}
              />
            </Sider>
            <Layout>
              <Header className="dashboard__header">
                <Image src="/images/logo.svg" alt="simform logo" width={122} height={22} />
                <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items} />
                <ThemeSwitcher />
              </Header>
              <Content className="dashboard__content">{children}</Content>
            </Layout>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
