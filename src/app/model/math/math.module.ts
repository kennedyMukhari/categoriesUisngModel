import { Categories } from "../categories.model";

export const Maths: Array<Categories> = [
    //0
    {
        question: 'Equation: 2x - 10 = 10 - 3x',
        options: [
            { option: 'A. 4' },
            { option: 'B. -4' },
            { option: 'C. 1/4' },
            { option: 'D. 4.5' }
        ]
    },
    {
        question: 'Equation: -10x - 19 = 19 - 8x',
        options: [
            { option: 'A. 20' },
            { option: 'B. 4' },
            { option: 'C. -19' },
            { option: 'D. 12' }
        ]
    },
    {
        question: 'Equation: -x - 1 = 221 + 2x',
        options: [
            { option: 'A. 12' },
            { option: 'B. 48' },
            { option: 'C. -74' },
            { option: 'D. 22' }
        ]
    },
    {
        question: 'Equaion: 2x + 6 = 4x - 2',
        options: [
            { option: 'A. 40' },
            { option: 'B. 4' },
            { option: 'C. 6' },
            { option: 'D. 4.5' }
        ]
    },
    {
        question: 'Equation: 17x - 12 = 114 + 3x',
        options: [
            { option: 'A. 10' },
            { option: 'B. 3' },
            { option: 'C. 9' },
            { option: 'D. 5.5' }
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