import React from 'react';
import { shallow } from 'enzyme';

import { View as HomeComponent } from '../view';

describe('home component', ()=>{
    it('should render without errors', ()=>{
        const component = shallow(<HomeComponent/>);
        expect(component).toBeTruthy();
    })
});