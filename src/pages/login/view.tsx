import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form } from "antd";
import logo from "assets/images/logo-dark.svg";
import { FormControl, FormControlTypes } from "components/form-controls";
import React from "react";

import { FormItemNames } from "./consts";
import styles from "./index.module.scss";
import { InnerProps } from "./types";

const Component: React.FC<InnerProps> = () => {
  return (
    <div className={styles.login}>
      <Card className={styles.login_container}>
        <div className={styles.login_logo}>
          <img src={logo} alt="logo" />
        </div>
        <Form
        //   onFinish={onFinish}
        >
          <FormControl
            name={FormItemNames.login}
            type={FormControlTypes.input}
            prefix={<UserOutlined />}
            placeholder="Username"
          />
          <FormControl
            name={FormItemNames.password}
            type={FormControlTypes.password}
            prefix={<LockOutlined />}
            placeholder="Password"
          />
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="/">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export { Component };
