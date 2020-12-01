import * as icons from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logo from "assets/images/logo.svg";
import { Breadcrumbs } from "components";
import { APP_NAME } from "consts";
import dayjs from "dayjs";
import { map } from "lodash/fp";
import React from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { history } from "routes";
import * as router from "routes/router";

import styles from "./index.module.scss";
import { BaseLayout } from "./types";

const { Header, Content, Footer, Sider } = Layout;

const Component: React.FC<BaseLayout> = ({
  children,
  pathname,
  layoutConfig,
  siderIsOpen,
  siderToggleState,
  preparedRoutesForBreadcrumbs,
}) => {
  const { menu } = layoutConfig;

  const ReadyBreadcrumbs = withBreadcrumbs([...preparedRoutesForBreadcrumbs], {
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
    <Layout className={styles.layout}>
      <Sider collapsible collapsed={siderIsOpen} onCollapse={siderToggleState}>
        <div className={styles.logo}>
          <img className={styles.logo_img} src={logo} alt="Main logo" />
          <a href="/" className={styles.logo_link}>
            Kraken 33
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
          {renderMenu(menu)}
          <Menu.Item
            danger
            key={router.getLink("api")}
            icon={<icons.CloudDownloadOutlined />}
            onClick={() => history.push(router.getLink("api"))}
          >
            API
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content className={styles.content}>
          <ReadyBreadcrumbs />
          <div className={styles.site_layout_background}>{children}</div>
        </Content>
        <Footer className={styles.footer}>
          {APP_NAME} ©{dayjs().year()} Created by <a href="/">kraken33</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export { Component };
