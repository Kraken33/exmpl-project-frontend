import { shallow } from 'enzyme';

import { View } from './view';
import { r } from 'utils/component-test';

describe('testing home component', ()=>{
    it('should render without errors', ()=>{
        const wrapper = shallow(r(View));

        expect(wrapper).toBeTruthy();
    });
});
