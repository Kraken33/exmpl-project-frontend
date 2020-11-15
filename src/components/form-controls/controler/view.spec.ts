import { shallow } from 'enzyme';
import { rProp } from 'utils/component-test';

import { default as Input } from '../input';

import { Component } from './view';
import { ETypes } from './types';

describe('testing form controler', ()=>{
    const rComponent = rProp(Component);

    it('should render without errors', ()=>{
        const wrapper = shallow(rComponent({}));

        expect(wrapper).toBeTruthy();
    });

    it('should set right component type', ()=>{
        const props = {
            type: ETypes.input
        };
        const wrapper = shallow(rComponent(props));
        expect(wrapper.props().component).toEqual(Input);
    });
})