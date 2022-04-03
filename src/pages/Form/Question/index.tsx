import CheckBox from '../../../components/CheckBox';
import { Container, TextQuestion } from './styles';
import { QuestionProps } from './types';
import { SelectorsTypes } from '../../../context/FormContext/data';
function Question({ text, checkboxes }: QuestionProps) {
    return (
        <Container>
            <TextQuestion>{text}</TextQuestion>
            {checkboxes.map((item: SelectorsTypes) => (
                <CheckBox questionTextId={text} label={item.text} checked={item.checked} key={item.idSelectors} />
            ))}
        </Container>
    );
}

export default Question;
