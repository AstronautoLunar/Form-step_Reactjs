// export const data = {
//     stepOne: {
//         question_one: {
//             selected: [1, 1],
//         },
//         question_two: {
//             selected: [1, 1],
//         },
//     },
//     stepTwo: {
//         question_one: {
//             selected: [1, 1],
//         },
//         question_two: {
//             selected: [1, 1],
//         },
//     },
//     stepTry: {
//         question_one: {
//             selected: [1, 1],
//         },
//         question_two: {
//             selected: [1, 1],
//         },
//     },
//     stepFor: {
//         question_one: {
//             selected: [1, 1],
//         },
//         question_two: {
//             selected: [1, 1],
//         },
//     },
// };

export const data: Data = [
    {
        idScreen: 1,
        type: 'screen',
        textLink: 'Sobre o que faz',
        questions: [
            {
                idQuestion: 1,
                type: 'question',
                text: 'O faz por aqui?',
                selectors: [
                    {
                        idSelectors: 1,
                        type: 'selector',
                        text: 'Na escola',
                        checked: false,
                        redirect: {
                            type: 'screen',
                            id: 2,
                            go: true,
                        },
                    },
                    {
                        idSelectors: 2,
                        type: 'selector',
                        text: 'No trabalho',
                        checked: false,
                        redirect: {
                            type: 'question',
                            id: 1,
                            go: true,
                        },
                    },
                ],
            },
            {
                idQuestion: 2,
                type: 'question',
                text: 'O que faz no trabalho?',
                selectors: [
                    {
                        idSelectors: 1,
                        type: 'selector',
                        text: 'Limpo o chão',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                    {
                        idSelectors: 2,
                        type: 'selector',
                        text: 'Cozinho',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                ],
            },
        ],
    },
    {
        idScreen: 2,
        type: 'screen',
        textLink: 'O por que que faz isso',
        questions: [
            {
                idQuestion: 1,
                type: 'question',
                text: 'Por que está aqui?',
                selectors: [
                    {
                        idSelectors: 1,
                        type: 'selector',
                        text: 'Para aprender',
                        checked: false,
                        redirect: {
                            type: 'question',
                            id: 3,
                            go: true,
                        },
                    },
                    {
                        idSelectors: 2,
                        type: 'selector',
                        text: 'Para brincar',
                        checked: false,
                        redirect: {
                            type: 'question',
                            id: 2,
                            go: true,
                        },
                    },
                ],
            },
            {
                idQuestion: 2,
                type: 'question',
                text: 'Que tipo de coisa quer brincar?',
                selectors: [
                    {
                        idSelectors: 1,
                        type: 'selector',
                        text: 'De carro',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                    {
                        idSelectors: 2,
                        type: 'selector',
                        text: 'De boneca',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                ],
            },
            {
                idQuestion: 3,
                type: 'question',
                text: 'O que quer estudar?',
                selectors: [
                    {
                        idSelectors: 1,
                        type: 'selector',
                        text: 'Quero estudar programação',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                    {
                        idSelectors: 2,
                        type: 'selector',
                        text: 'Quero estudar UI/UX Design',
                        checked: false,
                        redirect: {
                            type: 'none',
                            id: 0,
                            go: false,
                        },
                    },
                ],
            },
        ],
    },
];

export type RedirectSelectorsTypes = {
    type: 'screen' | 'question' | 'none';
    id: number;
    go: boolean;
};

export type SelectorsTypes = {
    idSelectors: number;
    type: 'selector';
    text: string;
    checked: boolean;
    redirect: RedirectSelectorsTypes;
};

export type QuestionsTypes = {
    idQuestion: number;
    type: 'question';
    text: string;
    selectors: SelectorsTypes[];
};

export type ScreenTypes = {
    idScreen: number;
    type: 'screen';
    textLink: string;
    questions: QuestionsTypes[];
};

export type Data = ScreenTypes[];
