import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form } from "antd";
import logo from "assets/images/logo-dark.svg";
import { FormControl, FormControlTypes } from "components/form-controls";
import React from "react";
import { Link } from "react-router-dom";
import { AvailableRoutes, getLink } from "routes";

import { FormItemNames } from "./consts";
import styles from "./index.module.scss";
import { InnerProps } from "./types";

const Component: React.FC<InnerProps> = ({
  intl,
  authenticate,
  handleSubmit,
}) => {
  return (
    <div className={styles.login}>
      <Card className={styles.login_container}>
        <div className={styles.login_logo}>
          <img src={logo} alt="logo" />
        </div>
        <Form onFinish={handleSubmit(authenticate)}>
          <FormControl
            name={FormItemNames.login}
            type={FormControlTypes.input}
            prefix={<UserOutlined />}
            placeholder={intl.loginLoginFieldPlaceholder}
          />
          <FormControl
            name={FormItemNames.password}
            type={FormControlTypes.password}
            prefix={<LockOutlined />}
            placeholder={intl.loginPasswordFieldPlaceholder}
          />
          <FormControl
            name={FormItemNames.remember}
            type={FormControlTypes.checkbox}
          >
            {" "}
            {intl.loginRememberMe}
          </FormControl>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {intl.loginButtonSubmit}
            </Button>
            <Link to={getLink(AvailableRoutes.home)}>
              {" "}
              {intl.loginRegistrNow}
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export { Component };
