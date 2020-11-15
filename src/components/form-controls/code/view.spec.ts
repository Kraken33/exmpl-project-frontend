import { shallow } from 'enzyme';
import { Controlled as CodeMirror } from "react-codemirror2";
import { rProp } from 'utils/component-test';

import { Component } from './view';
import { FControlCode } from './types';

describe('testing code type form control', ()=>{
    const rComponent = rProp(Component);

    const props: FControlCode = {
        input: {
            value: '',
            onChange: jest.fn()
        } as any,
        meta: {
            touched: false,
            error: false,
            valid: true
        } as any,
        label: 'Label',
        required: false
    };

    it('should change value when onBeforeChange called', ()=>{
        const wrapper = shallow(rComponent(props));
        const codeComponentWrapper = wrapper.find(CodeMirror);
        codeComponentWrapper.props().onBeforeChange(null, null, '');

        expect(props.input.onChange).toBeCalledWith('');
    });

    it('match snapshot', ()=>{
        const wrapper = shallow(rComponent(props));
        expect(wrapper).toMatchSnapshot();
    });
});