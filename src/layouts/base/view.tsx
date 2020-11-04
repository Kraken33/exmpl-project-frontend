import * as icons from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logo from "assets/images/logo.svg";
import { Breadcrumbs } from "components";
import { APP_NAME } from "consts";
import dayjs from "dayjs";
import { map } from "lodash/fp";
import React from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

import { BaseLayout } from "./types";

const { Header, Content, Footer, Sider } = Layout;

const BaseLayoutComponent: React.FC<BaseLayout> = ({
  children,
  layoutConfig,
  siderIsOpen,
  siderToggleState,
  preparedRoutesForBreadcrumbs,
}) => {
  const { menu } = layoutConfig;

  const ReadyBreadcrumbs = withBreadcrumbs(preparedRoutesForBreadcrumbs, {
    excludePaths: [],
  })(Breadcrumbs as React.ComponentType<any>);

  const renderMenu = map(({ label, icon, key }) => {
    // @ts-ignore
    const Icon = icons[icon];
    return (
      <Menu.Item key={key} icon={icon ? <Icon /> : null}>
        {label}
      </Menu.Item>
    );
  });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={siderIsOpen} onCollapse={siderToggleState}>
        <div className="logo">
          <img className="logo__img" src={logo} alt="Main logo" />
          <a href={""} className="logo__link">
            Kraken 33
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {renderMenu(menu)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <Content style={{ margin: "0 16px" }}>
          <ReadyBreadcrumbs />
          <div className="site-layout-background">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {APP_NAME} ©{dayjs().year()} Created by <a href="">kraken33</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export { BaseLayoutComponent };
