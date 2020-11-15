import './index.scss';

import {
    Button,
    Col,
    Divider,
    Row,
    Select,
    Tabs,
    TreeSelect,
} from "antd";
import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import ReactJson from "react-json-view";
import { map } from 'lodash/fp';
import { http } from 'services/http';

import { State, EKeys, KeysUnion, RequestDataTypes, ERequestDataType, EMethods, InnerProps } from './types';

const { TreeNode } = TreeSelect;
const { TabPane } = Tabs;

const Component: React.FC<InnerProps> = ({ routes }) => {
    const methods: Array<keyof typeof EMethods> = ["POST", "GET", "PUT", "DELETE"];

    const [state, setState] = useState<State>({
        method: methods[0],
        request: '',
        json: '',
        header: '',
        response: {}
    });

    const requestDataTypes: RequestDataTypes = [
        {
            value: ERequestDataType.json,
            label: 'JSON'
        },
        {
            value: ERequestDataType.header,
            label: 'Header'
        }
    ];
    const isSubmitted = state.request;

    const renderRequestDataTypes = map(({ value, label }) => <TabPane tab={label} key={value}>
        <CodeMirror
            {...getCodeMirrorProp(value)}
        />
    </TabPane>);

    const renderMethodOptions = map((method: string) => <Select.Option key={method} value={method}>
        {method}
    </Select.Option>);

    const getStateProp = (name: KeysUnion): { value: string; onChange: any } => ({
        value: state[name],
        onChange: (e: any) => {
            setState({
                ...state,
                [name]: e
            });
        }
    })

    const getCodeMirrorProp = (name: KeysUnion): { value: string; options: any; onBeforeChange: any } => ({
        options: {
            theme: "material",
        },
        value: state[name],
        onBeforeChange: (_: any, __: any, value: string) => {
            setState({ ...state, [name]: value });
        }
    })

    const sendRequest = async () => {
        try {
            const { method, request, header } = state;
            const json = state.json ? JSON.parse(state.json) : {};

            const response = await http({
                url: request,
                method: method,
                params: json,
                headers: header
            });

            setState({ ...state, response });
        } catch (e) {
            setState({ ...state, response: e });
        }

    }

    return (
        <div className="api">
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={6}>
                            <Select {...getStateProp(EKeys.method)} className="api-methods">
                                {renderMethodOptions(methods)}
                            </Select>
                        </Col>
                        <Col span={14}>
                            <TreeSelect
                                showSearch
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select"
                                allowClear
                                className="api-request"
                                treeDefaultExpandAll
                                {...getStateProp(EKeys.request)}
                            >
                                {routes.map((route: string) => <TreeNode value={route} title={route} key={route} />)}
                            </TreeSelect>
                        </Col>
                        <Col span={4}>
                            <Button className="api-submit" disabled={!isSubmitted} onClick={sendRequest}>Send</Button>
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
