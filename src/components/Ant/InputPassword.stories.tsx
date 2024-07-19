import type { Meta, StoryObj } from '@storybook/react'
import { Input } from 'antd'

const InputPasswordStory: Meta<typeof Input.Password> = {
  title: 'Ant Design/InputPassword',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    allowClear: { control: 'boolean' },
    size: { control: 'select', options: ['large', 'middle', 'small'] },
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  component: Input.Password
}

export default InputPasswordStory

type InputPasswordStoryType = StoryObj<typeof Input.Password>

export const InputPasswordDemo: InputPasswordStoryType = {
  args: {
    allowClear: true,
    size: 'middle',
    maxLength: 10,
    placeholder: 'Passowrd Input Field',
    disabled: false
  }
}
