import { Data, QuestionsTypes } from '../context/FormContext/data';

function searchQuestions(stateForm: Data, idNumberPage: string): QuestionsTypes[] {
    const filteredScreen = stateForm.filter((item) => String(item.idScreen) === idNumberPage);
    const currentScreen = filteredScreen[0];
    const { questions } = currentScreen;

    return questions;
}

export default searchQuestions;
