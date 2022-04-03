import { Reducer } from 'react';
import { TypeActionsForm } from '../../types/TypeActionsForm';
import { EnumTypesForm } from './types';
import { data } from './data';
export interface ITaskAction {
    type: EnumTypesForm;
    payload: typeof data;
}
export const reducer: Reducer<typeof data, ITaskAction> = (state, action) => {
    switch (action.type) {
        case EnumTypesForm.CHANGE_OPTIONS:
            console.log('OPAA');
            return { ...state };
        default:
            return { ...state };
    }
};
