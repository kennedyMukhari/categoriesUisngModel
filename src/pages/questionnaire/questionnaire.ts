import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {TotalPage} from '../total/total'
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

@IonicPage()
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {
  @ViewChild('slides') slides: Slides;
  title: string;
  Questions:any;
  grandTotal: number = 0;
  correMaths = ['A. 4','D. 12,','C. -74','B. 4'];
  correHistory = ['A. Nelson Mandela','D. FW de Klerk','A. arrested in 1962','A. Robben Island','D. max-security prison'];
  correSoccer = ['A. Messi, Ronaldo','D. LiverPool FC','B. Cristiano Ronaldo','D. Real Madrid','C. Mohammed Salah'];
  correPolitics = ['B. Zimbabwe','A. United States','C. ANC','D. Cyril Ramaphosa','A. Robert Mugabe'];
  correScience = ['A. Ren Zhengfei','D. Mark Zuckerberg','C. China','B. Huawei','C. United States'];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quizData: QuizDataProvider) {
    
  }

  ionViewDidLoad() {
    // console.log(this.navParams);
    this.title = this.navParams.data;
    this.Questions = this.quizData.questions;
  }
  getAns(val){
    if (this.slides.isEnd() ==false){
      switch (this.title) {
        case 'Mathematics':
          this.correMaths.map(res => {
            if (val == res){
              this.grandTotal = this.grandTotal + 20;
              
            } else {
  
            }
            
          })
          console.log('logic for Mathematics');
          break;
          case 'History':
            this.correHistory.map(res =>{
              if( val == res){
                this.grandTotal = this.grandTotal +20;
              }
              else{

              }
            })
            break;
            case 'Soccer':
              this.correSoccer.map(res => {
                if (val == res){
                  this.grandTotal = this.grandTotal+20;
                }
              })
            break;
            case 'Politics':
              this.correPolitics.map(res => {
                if (val == res){
                  this.grandTotal = this.grandTotal+20;
                }
              })
              break;
              case 'Science':
                this.correScience.map(res => {
                  if (val == res) { 
                    this.grandTotal = this.grandTotal+20
                  }
                })
        default:
          break;
      }
      this.slides.slideNext();
    } else{
      console.log('Quiz done');
      
    }
  }
  showTotal(){
    this.navCtrl.push(TotalPage, this.grandTotal);
  }
}
