import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IStudent} from '../../providers/IStudent';
import { StudentProvider } from './../../providers/student';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private student: IStudent;

  constructor(public navCtrl: NavController, private studentProvider: StudentProvider) {
    this.student = studentProvider.info();
  }

  name(){
    return this.student.name;
  }

  surname(){
    return this.student.surname;
  }

  identifitacion(){
    return this.student.identifitacion;
  }

  degree(){
    return this.student.degree;
  }

}
