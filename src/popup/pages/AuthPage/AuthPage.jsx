import React from "react";
import { Empty } from "antd";

// components
import AuthForm from "../../../containers/Forms/AuthForm";

function AuthPage() {
  return (
    <>
      <Empty description="Please proved user/web app token to see analytics info"/>
      <AuthForm/>
    </>
  );
}

export default AuthPage;
