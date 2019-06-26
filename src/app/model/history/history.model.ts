import { Categories } from "../categories.model";

export const History: Array<Categories> = [
    //0
    {
        question: 'Who is the first black president?',
        options: [
            { option: 'A. Nelson Mandela' },
            { option: 'B. Jacob Zuma' },
            { option: 'C. Thabo Mbeki' },
            { option: 'D. FW de Klerk' }
        ]
    },
    {
        question: 'The last white president of south africa.',
        options: [
            { option: 'A. Pik Botha' },
            { option: 'B. DF Malan' },
            { option: 'C. Jan Smuts' },
            { option: 'D. FW de Klerk' }
        ]
    },
    {
        question: 'When was mandela arrested?',
        options: [
            { option: 'A. arrested in 1962' },
            { option: 'B. arrested in 1964' },
            { option: 'C. arrested in 1994' },
            { option: 'D. arrested in 2000' }
        ]
    },
    {
        question: 'What prison was Nelson Mandela held?',
        options: [
            { option: 'A. Robben Island' },
            { option: 'B. Grootvlei Prison' },
            { option: 'C. Leeuwkop Prison' },
            { option: 'D. Drakenstein Prison' }
        ]
    },
    {
        question: 'What is Robben Island famous for?',
        options: [
            { option: 'A. Luxury Hotel' },
            { option: 'B. Court of Law' },
            { option: 'C. Presidents Home' },
            { option: 'D. max-security prison' }
        ]
    }
]
export interface Category { //0
    categoryName: string,
    questions: [
        {
            question: string
            options: [
                { option: string },
                { option: string },
                { option: string },
                { option: string }
            ]
        },
        {
            question: string
            options: [
                { option: string },
                { option: string },
                { option: string },
                { option: string }
            ]
        },
        {
            question: string
            options: [
                { option: string },
                { option: string },
                { option: string },
                { option: string }
            ]
        },
        {
            question: string
            options: [
                { option: string },
                { option: string },
                { option: string },
                { option: string }
            ]
        },
        {
            question: string
            options: [
                { option: string },
                { option: string },
                { option: string },
                { option: string }
            ]
        }


    ]
}
