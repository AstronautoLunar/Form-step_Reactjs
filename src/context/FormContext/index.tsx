import React, { Children, ReactNode, useReducer } from 'react';
import { FormContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export function FormProvider({ children }: { children: ReactNode }) {
    const [stateForm, dispatchForm] = useReducer(reducer, data);
    return <FormContext.Provider value={{ stateForm, dispatchForm }}>{children}</FormContext.Provider>;
}
