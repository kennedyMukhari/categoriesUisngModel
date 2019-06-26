import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnairePage } from '../questionnaire/questionnaire'
import { Category } from '../../app/model/math/math.module';
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = ['History', 'Science', 'Politics', 'Mathematics', 'Soccer'];
  Categories: Array<Category> = [
    {
      
        categoryName: 'Soccer',
        questions: [
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
      },
      {categoryName: 'History',
      questions: [
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
              { option: 'C. Presidential Home' },
              { option: 'D. max-security prison' }
          ]
      }
      ]
  },
    {
      categoryName: 'Mathematics',
      questions: [
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
          question: 'Equation: -x - 1 = 221 + 2x',
          options: [
            { option: 'A. 12' },
            { option: 'B. 48' },
            { option: 'C. -74' },
            { option: 'D. 22' }
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
    },
    {
      categoryName: 'Politics',
      questions: [
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
    },

    {
      categoryName: 'Science',
      questions: [
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
    },
  ]
  constructor(public navCtrl: NavController, private quizdata: QuizDataProvider) {

  }
  goToQuestionsPAge(value, Qs) {
    this.quizdata.setData(Qs)
    this.navCtrl.push(QuestionnairePage, value);
  }
}
