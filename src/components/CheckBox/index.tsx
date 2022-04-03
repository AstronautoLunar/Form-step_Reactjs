import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { TypeCheckBox } from '../../types/TypeCheckBox';
import { Check, Container } from './styles';
import { useForm } from '../../context/FormContext';
import { MyParams } from '../../types/ParamsRoute';
import { createIdNumberPage, searchQuestions } from '../../utils';
import { EnumTypesForm } from '../../context/FormContext/types';

function CheckBox({ questionTextId, label, checked = false }: TypeCheckBox) {
    const [stateChecked, setStateChecked] = useState(checked);
    const { stateForm, dispatchForm } = useForm();
    const { id } = useParams<MyParams>();
    const idNumberPage = createIdNumberPage(id);
    const questionsCurrent = searchQuestions(stateForm, idNumberPage);

    function checkInput() {
        const indexSearchScreen = stateForm.findIndex((item) => String(item.idScreen) === idNumberPage);

        const screenCurrent = stateForm[indexSearchScreen];

        const indexSearchQuestion = screenCurrent.questions.findIndex((item) => item.text === questionTextId);

        const questionCurrent = screenCurrent.questions[indexSearchQuestion];

        const indexSearchSelectors = questionCurrent.selectors.findIndex((item) => item.text === label);

        const selectorCurrent = questionCurrent.selectors[indexSearchSelectors];

        stateForm[indexSearchScreen].questions[indexSearchQuestion].selectors[indexSearchSelectors].checked = !checked;

        // const question = questionsCurrent.findIndex((question) => question.text === questionTextId);
        // const selector = question.selectors.filter((item) => item.text === label)[0];

        // console.log(selector);
        dispatchForm({ type: EnumTypesForm.CHANGE_OPTIONS, payload: stateForm });
    }

    // eslint-disable-next-line prettier/prettier
    return (
        <Container
            control={<Check size="medium" />}
            label={label}
            onChange={checkInput}
            checked={stateChecked}
        />
    );
}

/**
 * A prop "checked" está entrando em um certo
 * conflito com o "defaultChecked" do componente
 * Check dentro da prop "control" do componente Container
 * por isso o defaultChecked foi removido do componente Check
 */

export default CheckBox;
