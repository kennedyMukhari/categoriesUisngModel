import { Categories } from "../categories.model";

export const Science: Array<Categories> = [
    //0
    {
        question: 'Who started tech company Huawei?',
        options: [
            { option: 'A. Ren Zhengfei' },
            { option: 'B. Steve jobs' },
            { option: 'C. Bill Gates' },
            { option: 'D. Larry page' }
        ]
    },
    {
        question: 'Who is the CEO of Facebook?',
        options: [
            { option: 'A. Bill Gates' },
            { option: 'B. Jeff Beezos' },
            { option: 'C. Vladmir Putin' },
            { option: 'D. Mark Zuckerberg' }
        ]
    },
    {
        question: 'Country ahead on 5G network.',
        options: [
            { option: 'A. United States' },
            { option: 'B. South Africa' },
            { option: 'C. China' },
            { option: 'D. Germany' }
        ]
    },
    {
        question: 'Tech company already deploying 5G.',
        options: [
            { option: 'A. Google' },
            { option: 'B. Huawei' },
            { option: 'C. Microsoft' },
            { option: 'D. Qualcomm' }
        ]
    },
    {
        question: 'Country that invented Microsoft.',
        options: [
            { option: 'A. France' },
            { option: 'B. DRC Congo' },
            { option: 'C. United States' },
            { option: 'D. Zimbabwe' }
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