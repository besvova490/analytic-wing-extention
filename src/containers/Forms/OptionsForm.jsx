import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

// hooks
import { useStorage } from "../../context/StorageContext";

function OptionsForm() {
  const [_, updateStorage] = useStorage();

  const handleSubmit = (data) => {
    updateStorage("userToken", data.userToken);
    updateStorage("rememberUserToken", data.rememberUserToken);
  };

  return (
    <Form
      name="options-form"
      onFinish={handleSubmit}
      initialValues={{
        userToken: null,
        rememberUserToken: false,
      }}
    >
      <Form.Item
        name="userToken"
        label="User token"
        rules={[{ required: true, message: "User token is required" }]}
      >
        <Input placeholder="User token"/>
      </Form.Item>
      <Form.Item
        name="rememberUserToken"
        valuePropName="checked"
      >
        <Checkbox>Remember user token</Checkbox>
      </Form.Item>
      <Button block type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
}

export default OptionsForm;