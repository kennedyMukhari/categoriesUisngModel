import { Categories } from "../categories.model";

export const Soccer: Array<Categories> = [
    //0
    {
        question: '5 times Golden Ball winners.',
        options: [
            { option: 'A. Messi, Ronaldo' },
            { option: 'B. Ibrahimovic, Iniesta' },
            { option: 'C. Neymar, Mbappe' },
            { option: 'D. Salah, Mane' }
        ]
    },
    {
        question: '2018/19 UCL winners.',
        options: [
            { option: 'A. Barcelona FC' },
            { option: 'B. Manchester City' },
            { option: 'C. Real Madrid CF' },
            { option: 'D. LiverPool FC' }
        ]
    },
    {
        question: 'Player Who won UCL 5 times.',
        options: [
            { option: 'A. Mohammed Salah' },
            { option: 'B. Cristiano Ronaldo' },
            { option: 'C. Lionel Messi' },
            { option: 'D. Neymar Jr' }
        ]
    },
    {
        question: 'UCL title winners 2017/18 season.',
        options: [
            { option: 'A. Tottenham Hotspurs' },
            { option: 'B. Manchester United' },
            { option: 'C. Paris Saint-Germain' },
            { option: 'D. Real Madrid' }
        ]
    },
    {
        question: 'Puskas award winner 2017/18 season.',
        options: [
            { option: 'A. Cristiano Ronaldo' },
            { option: 'B. Zlatan Ibrahimović' },
            { option: 'C. Mohammed Salah' },
            { option: 'D. Raheem Sterling' }
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