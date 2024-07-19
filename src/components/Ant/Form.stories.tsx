import type { Meta, StoryObj } from '@storybook/react'
import { Form, Input, Button } from 'antd'

const FormStory: Meta<typeof Form> = {
  title: 'Ant Design/Form',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'radio', options: ['horizontal', 'vertical'] }
  },
  component: Form
}

export default FormStory

type Story = StoryObj<typeof Form>

export const FormDemo: Story = {
  args: {
    layout: 'vertical'
  },
  render: (args) => (
    <Form layout={args.layout}>
      <Form.Item label="Email" required>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Password" required>
        <Input.Password placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
