import { Button, Col, Divider, Row, Select, Tabs, TreeSelect } from "antd";
import { EMPTY_STRING, HttpMethods } from "consts";
import { map } from "lodash/fp";
import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import ReactJson from "react-json-view";
import { http } from "services/http";

import styles from "./index.module.scss";
import {
  EKeys,
  ERequestDataType,
  InnerProps,
  KeysUnion,
  RequestDataTypes,
  State,
} from "./types";

const { TreeNode } = TreeSelect;
const { TabPane } = Tabs;

const Component: React.FC<InnerProps> = ({ routes, intl }) => {
  const methods: Array<keyof typeof HttpMethods> = [
    HttpMethods.POST,
    HttpMethods.GET,
    HttpMethods.PUT,
    HttpMethods.DELETE,
  ];

  const [state, setState] = useState<State>({
    method: methods[0],
    request: EMPTY_STRING,
    json: EMPTY_STRING,
    header: EMPTY_STRING,
    response: {},
  });

  const {
    apiRequestPlaceholder,
    apiSubmitButtonLabel,
    apiRequestDataTypeJson,
    apiRequestDataTypeHeader,
  } = intl;

  const requestDataTypes: RequestDataTypes = [
    {
      value: ERequestDataType.json,
      label: apiRequestDataTypeJson,
    },
    {
      value: ERequestDataType.header,
      label: apiRequestDataTypeHeader,
    },
  ];
  const isSubmitted = !!state.request;

  const getStateProp = (name: KeysUnion): { value: string; onChange: any } => ({
    value: state[name],
    onChange: (e: any) => {
      setState({
        ...state,
        [name]: e,
      });
    },
  });

  const getCodeMirrorProp = (
    name: KeysUnion
  ): { value: string; options: any; onBeforeChange: any } => ({
    options: {
      theme: "material",
    },
    value: state[name],
    onBeforeChange: (_: any, __: any, value: string) => {
      setState({ ...state, [name]: value });
    },
  });

  const sendRequest = async () => {
    try {
      const { method, request } = state;
      const json = state.json ? JSON.parse(state.json) : {};
      // @TODO Finish it (data в зависимости от метода и хедеры подключить)

      const response = await http({
        url: request,
        method: method as any,
        params: json,
        data: json,
        headers: {},
      });

      setState({ ...state, response });
    } catch (e) {
      setState({ ...state, response: e });
    }
  };

  const renderRequestDataTypes = map(({ value, label }) => (
    <TabPane tab={label} key={value}>
      <CodeMirror {...getCodeMirrorProp(value)} />
    </TabPane>
  ));

  const renderMethodOptions = map((method: string) => (
    <Select.Option key={method} value={method}>
      {method}
    </Select.Option>
  ));

  return (
    <div className={styles.api}>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={6}>
              <Select
                {...getStateProp(EKeys.method)}
                className={styles.api_methods}
              >
                {renderMethodOptions(methods)}
              </Select>
            </Col>
            <Col span={14}>
              <TreeSelect
                showSearch
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder={apiRequestPlaceholder}
                allowClear
                className={styles.api_request}
                treeDefaultExpandAll
                {...getStateProp(EKeys.request)}
              >
                {routes.map((route: any) => (
                  <TreeNode value={route()} title={route()} key={route()} />
                ))}
              </TreeSelect>
            </Col>
            <Col span={4}>
              <Button
                className={styles.api_submit}
                disabled={!isSubmitted}
                onClick={sendRequest}
              >
                {apiSubmitButtonLabel}
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Tabs defaultActiveKey={requestDataTypes[0].value as any}>
            {renderRequestDataTypes(requestDataTypes)}
          </Tabs>
        </Col>
        <Col span={24}>
          <Divider />
          <ReactJson src={state.response} />
        </Col>
      </Row>
    </div>
  );
};

export { Component };
