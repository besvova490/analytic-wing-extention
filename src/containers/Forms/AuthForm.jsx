/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Checkbox } from "antd";

// hooks
import { useStorage } from "../../context/StorageContext";


function AuthForm() {
  const [_, updateStorage] = useStorage();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    if (data.isWebApp) {
      updateStorage("webApp", { url: data.webAppUrl, token: data.webAppToken })
        .then(() => navigate("/"));

      return;
    }

    updateStorage("userToken", data.userToken).then(() => navigate("/"));
  };
  
  return (
    <Form
      name="auth-form"
      onFinish={handleSubmit}
      initialValues={{
        isWebApp: false,
        userToken: null,
        webAppUrl: null,
        webAppToken: null,
      }}
    >
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.isWebApp !== currentValues.isWebApp}
      >
        {
          ({ getFieldValue }) => getFieldValue("isWebApp")
            ? (<>
              <Form.Item
                name="webAppUrl"
                label="Web app url"
                rules={[{ required: true, message: "Web app url is required" }]}
              >
                <Input placeholder="Web app url"/>
              </Form.Item>
              <Form.Item
                name="webAppToken"
                label="Web app token"
                rules={[{ required: true, message: "Web app token is required" }]}
              >
                <Input placeholder="Web app token"/>
              </Form.Item>
            </>)
            : (
              <Form.Item
                name="userToken"
                label="User token"
                rules={[{ required: true, message: "User token is required" }]}
              >
                <Input placeholder="User token"/>
              </Form.Item>
            )
        }
      </Form.Item>
      <Form.Item
        name="isWebApp"
        valuePropName="checked"
      >
        <Checkbox>Web app</Checkbox>
      </Form.Item>
      <Button block type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
}

AuthForm.propTypes = {};

export default AuthForm;
