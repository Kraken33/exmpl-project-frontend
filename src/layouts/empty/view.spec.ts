import { shallow } from 'enzyme';

import { View } from './view';
import { r } from 'utils/component-test';

describe('testing empty layout component', ()=>{
    it('should render without errors', ()=>{
        const shWrapper = shallow(r(View));

        expect(shWrapper).toBeTruthy();
    });
});
