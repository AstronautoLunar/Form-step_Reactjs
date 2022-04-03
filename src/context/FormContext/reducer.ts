import { Reducer } from 'react';
import { ITaskAction } from '../../types/TypeContextForm';
import { EnumTypesForm } from './types';
import { data } from './data';

export const reducer: Reducer<typeof data, ITaskAction> = (state, action) => {
    switch (action.type) {
        case EnumTypesForm.CHANGE_OPTIONS:
            return state;
        default:
            return state;
    }
};
