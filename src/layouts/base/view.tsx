import * as icons from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logo from "assets/images/logo.svg";
import { Breadcrumbs } from "components";
import { APP_NAME } from "consts";
import dayjs from "dayjs";
import { map } from "lodash/fp";
import React from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { history, routes } from "routes";

import { BaseLayout } from "./types";

const { Header, Content, Footer, Sider } = Layout;

const BaseLayoutComponent: React.FC<BaseLayout> = ({
  children,
  pathname,
  layoutConfig,
  siderIsOpen,
  siderToggleState,
  preparedRoutesForBreadcrumbs,
}) => {
  const { menu } = layoutConfig;

  const ReadyBreadcrumbs = withBreadcrumbs(preparedRoutesForBreadcrumbs, {
    excludePaths: [],
  })(Breadcrumbs as React.ComponentType<any>);

  const renderMenu = map(({ label, icon, link }) => {
    // @ts-ignore
    const Icon = icons[icon];
    return (
      <Menu.Item
        key={link}
        icon={icon ? <Icon /> : null}
        onClick={() => history.push(link)}
      >
        {label}
      </Menu.Item>
    );
  });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={siderIsOpen} onCollapse={siderToggleState}>
        <div className="logo">
          <img className="logo__img" src={logo} alt="Main logo" />
          <a href="/" className="logo__link">
            Kraken 33
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
          {renderMenu(menu)}
          <Menu.Item
            danger
            key={routes.api.link()}
            icon={<icons.CloudDownloadOutlined />}
            onClick={() => history.push(routes.api.link())}
          >
            API
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <ReadyBreadcrumbs />
          <div className="site-layout-background">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {APP_NAME} ©{dayjs().year()} Created by <a href="/">kraken33</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export { BaseLayoutComponent };
