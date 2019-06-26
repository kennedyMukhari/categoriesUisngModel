import { Categories } from "../categories.model";

export const Politics: Array<Categories> = [
    //0
    {
        question: 'Which country is under sanctions?',
        options: [
            { option: 'A. South Africa' },
            { option: 'B. Zimbabwe' },
            { option: 'C. Australia' },
            { option: 'D. Poland' }
        ]
    },
    {
        question: 'Which country cut ties with Huawei?',
        options: [
            { option: 'A. United States' },
            { option: 'B. England' },
            { option: 'C. Spain' },
            { option: 'D. New Mexico' }
        ]
    },
    {
        question: 'Which political party rules RSA?',
        options: [
            { option: 'A. A. EFF' },
            { option: 'B. DA' },
            { option: 'C. ANC' },
            { option: 'D. FF+' }
        ]
    },
    {
        question: 'Who is the president of RSA?',
        options: [
            { option: 'A. Nelson Mandela' },
            { option: 'B. Julius Malema' },
            { option: 'C. Robert Mugabe' },
            { option: 'D. Cyril Ramaphosa' }
        ]
    },
    {
        question: 'Zimbabwes recently impeached president?',
        options: [
            { option: 'A. Robert Mugabe' },
            { option: 'B. Jacob Zuma' },
            { option: 'C. Trevor Noah' },
            { option: 'D. Thabo Mbeki' }
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