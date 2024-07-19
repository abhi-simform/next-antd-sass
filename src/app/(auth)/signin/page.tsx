import { Form, Input, Button } from 'antd'

export default function Signin() {
  return (
    <div className="form-wrapper">
      <p className="title">Signin</p>
      <p className="info">Don’t have an account? Sign Up</p>
      <Form layout="vertical">
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
    </div>
  )
}
