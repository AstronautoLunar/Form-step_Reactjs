import { useParams } from 'react-router-dom';

import Question from './Question';

import { Container } from './styles';
import { useForm } from '../../context/FormContext';
import { MyParams } from '../../types/ParamsRoute';
import { createIdNumberPage, searchQuestions } from '../../utils';

function Form() {
    const { id } = useParams<MyParams>();
    const { stateForm } = useForm();
    const idNumberPage = createIdNumberPage(id);
    const questions = searchQuestions(stateForm, idNumberPage);

    return (
        <Container>
            {questions.map(({ idQuestion, selectors, text }) => (
                <Question key={idQuestion} text={text} checkboxes={selectors} />
            ))}
        </Container>
    );
}

export default Form;
