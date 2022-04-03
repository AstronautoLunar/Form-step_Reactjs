import { data } from '../context/FormContext/data';
import { TypeActionsForm } from './TypeActionsForm';

export type TypeContextForm = {
    stateForm: typeof data;
    dispatchForm: TypeActionsForm;
};
