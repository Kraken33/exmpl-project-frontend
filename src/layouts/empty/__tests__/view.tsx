import React from 'react';
import { shallow } from 'enzyme';

import { View as EmptyLayout } from '../view';

describe('empty layout', ()=>{
    it('should render without errors', ()=>{
        const component = shallow(<EmptyLayout children={<div>Render something</div>}/>);
        expect(component).toBeTruthy();
    })
});