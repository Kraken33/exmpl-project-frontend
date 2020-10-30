import React from 'react';
import { shallow } from 'enzyme';

import { View as AppComponent } from '../view';

describe('app component', ()=>{
    it('should render without errors', ()=>{
        const component = shallow(<AppComponent />);
        expect(component).toBeTruthy();
    })
});