import { entryReducer, initialState } from './reducers';
import { siderToggleState } from './actions';

describe('layout reducer', ()=>{
    it('should return reducer init state', ()=>{
        const reducer = entryReducer(undefined, {} as any);

        expect(reducer).toEqual(initialState);
    });

    it('should handle siderToggleState', ()=>{
        const reducer = entryReducer(undefined, siderToggleState());

        expect(reducer.siderIsOpen).toEqual(true);
    });
});