import { Form, Input, Button } from 'antd'

export default function Signup() {
  return (
    <div className="form-wrapper">
      <p className="title">Signup</p>
      <p className="info">Already have an account? Sign In</p>
      <Form layout="vertical">
        <Form.Item label="First Name" required>
          <Input type="text" placeholder="Enter first name" />
        </Form.Item>
        <Form.Item label="Last Name" required>
          <Input type="text" placeholder="Enter last name" />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input type="email" placeholder="Enter email adress" />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password type="password" placeholder="Enter password" />
        </Form.Item>
        <Form.Item label="Confirm Password" required>
          <Input.Password type="password" placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
