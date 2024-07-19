import type { Meta, StoryObj } from '@storybook/react'
import { MenuProps, Menu, Layout } from 'antd'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const items2: MenuProps['items'] = [<>1. </>, <>2. </>, <>3. </>].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon,
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

const LayoutStory: Meta<typeof Layout> = {
  title: 'Ant Design/Layout',
  tags: ['autodocs'],
  argTypes: {},
  component: Layout
}

export default LayoutStory

const { Content, Header, Sider } = Layout

type Story = StoryObj<typeof Layout>

export const LayoutDemo: Story = {
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum cupiditate quis, fugit
        et, nam incidunt laudantium modi rerum delectus maiores molestiae autem similique,
        consequuntur perspiciatis. Quod iure officia ex sed soluta unde iusto maiores quae.
        Consequuntur, commodi? Quos similique minus error, necessitatibus minima expedita! Quisquam
        molestiae labore hic error?
      </>
    )
  },
  render: (args) => (
    <Layout>
      <Sider breakpoint="lg" collapsible>
        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items2} />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="/images/logo.svg" alt="simform logo" width={122} height={22} />
          <ThemeSwitcher />
        </Header>
        <Content>{args.children}</Content>
      </Layout>
    </Layout>
  )
}
