import { Dispatch } from 'react';
import { data } from '../context/FormContext/data';
import { EnumTypesForm } from '../context/FormContext/types';

export type TypeContextForm = {
    stateForm: typeof data;
    dispatchForm: Dispatch<ITaskAction>;
};

export interface ITaskAction {
    type: EnumTypesForm;
    payload: typeof data;
}
