import { Injectable } from '@angular/core';
import { IStudent } from './IStudent';
import { IContact } from './IContact';

@Injectable()
export class StudentProvider{

  private student: IStudent = {
    name: "Rafael",
    surname: "Caricol Bermejo",
    identifitacion: "05418565-H",
    degree: "Bachelor Of Science in Information Technology Engeneering"
  };

  private student_contact: IContact = {
    email: "rcaricol@yahoo.com",
    phone: "+34639491516",
    address: "Puerto de Málaga Street",
    code: "28821",
    city: "Coslada-Madrid"
  };

  constructor(){ }

  info(){
    return this.student;
  }

  contact(){
    return this.student_contact;
  }

}
