import type { Meta, StoryObj } from '@storybook/react'
import { Form, Input } from 'antd'

const FormItemStory: Meta<typeof Form.Item> = {
  title: 'Ant Design/FormItem',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' }
  },
  component: Form.Item
}

export default FormItemStory

type Story = StoryObj<typeof Form.Item>

export const FormItemDemo: Story = {
  args: {
    label: 'Input Field',
    required: false
  },
  render: (args) => (
    <Form.Item label={args.label} required={args.required}>
      <Input placeholder="Input placeholder" />
    </Form.Item>
  )
}
