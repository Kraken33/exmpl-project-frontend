import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import { BreadcrumbComponent } from "./types";

const Component: React.FC<BreadcrumbComponent> = ({ breadcrumbs }) => {
  const isLast = (index: number) => breadcrumbs.length - 1 !== index;

  return (
    <Breadcrumb className={styles.breadcrumbs}>
      {breadcrumbs?.map(({ breadcrumb, match }, index) => {
        return (
          <Breadcrumb.Item key={breadcrumb.key}>
            {!isLast(index) ? (
              <Link to={match.url}>{breadcrumb}</Link>
            ) : (
              <span>{breadcrumb}</span>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export { Component };
