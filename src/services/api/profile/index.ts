import { ProfileApi } from './types';

export const profile: ProfileApi = {
  fetch: () => new Promise((res: Function, rej: Function)=>{
    setTimeout(()=>res({ r: 'string' }), 2000);
  }),
};
