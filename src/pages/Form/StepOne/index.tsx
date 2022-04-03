import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import CheckBox from '../../../components/CheckBox';
import { Container } from './styles';
function StepOne() {
    return (
        <Container>
            <CheckBox label="testebad" />
        </Container>
    );
}

export default StepOne;
