import StepOne from './StepOne';

import { Container } from './styles';
import { useForm } from '../../context/FormContext';

function Form() {
    return (
        <Container>
            <StepOne />
        </Container>
    );
}

export default Form;
