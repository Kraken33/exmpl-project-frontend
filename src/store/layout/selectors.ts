import { createSelector } from "reselect";
import { get } from 'lodash/fp';

export const selectNames = {
    layout: 'layout',
    config: 'config',
    siderIsOpen: 'siderIsOpen'
};

const getLayoutState = get(selectNames.layout);

const getLayoutConfig = createSelector(
    [getLayoutState],
    get(selectNames.config)
);

const getSiderState = createSelector(
    [getLayoutState],
    get(selectNames.siderIsOpen)
)

export {
    getLayoutConfig,
    getSiderState
}; 