import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IContact } from '../../providers/IContact';
import { StudentProvider } from './../../providers/student';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private student_contact: IContact;

  constructor(public navCtrl: NavController, private studentProvider: StudentProvider) {
    this.student_contact = studentProvider.contact();
  }

  email(){
    return this.student_contact.email;
  }

  phone(){
    return this.student_contact.phone;
  }

  address(){
    return this.student_contact.address;
  }

  code(){
    return this.student_contact.code;
  }

  city(){
    return this.student_contact.city;
  }

}
