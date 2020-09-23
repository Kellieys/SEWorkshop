import React, { Component } from 'react';
import NavBar from './NavBar';
import { Form, Input, InputNumber, Button } from 'antd';

export default class Forms extends Component {

    render() {

        const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
          
        return (
            <div>

                <NavBar />

                <div>

              <Form validateMessages={validateMessages}>
                    <Form.Item
                        name={['name']}
                        label="Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['email']}
                        label="Email"
                        rules={[
                        {
                            type: 'email',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['age']}
                        label="Age"
                        rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item name={['introduction']} label="Introduction">
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>

                </Form> 

                </div>
                
            </div>
        )
    }
}
