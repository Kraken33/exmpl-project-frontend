import React from 'react';
import { buildRoutes } from '../build-routes';
import { IRoute, Routes } from '../types';

describe('routes/build-routes', ()=>{
    it('should return correct result', ()=>{
        const routes: {testRoute: IRoute} = {
            testRoute: {
                path: '/',
                link: ()=>'/',
                breadcrumb: ()=>'Some breadcrumb',
                page: ()=><div>It test content</div>,
                exact: false,
                layout: 'EmptyLayout'
            }
        };
        const result = buildRoutes(routes as Routes);
        expect(result).toBeTruthy();
    });
})