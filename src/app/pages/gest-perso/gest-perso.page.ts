import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FullName, Person } from './perosna/perosna.component';

/*
export type FullName = {
  name: string;
  subname: string;
};
export type PhoneNum = {
  countryID: number;
  phone: number;
};
export interface Person {
  id: number;
  personName: FullName;
  profilePic: string;
  email: string;
  age: number;
  job: string;
  workExp: number;
  description: string;
}
*/
@Component({
  selector: 'app-gest-perso',
  templateUrl: './gest-perso.page.html',
  styleUrls: ['./gest-perso.page.scss'],
})
export class GestPersoPage implements OnInit {
  protected peopleList: Person[];
  private atras: Location;


  constructor(atras: Location) { this.atras = atras;}


  irAtras() {
    this.atras.back();
  }
  ngOnInit() {
    this.peopleList =
      Array<Person>(
        {
          id: 1,
          personName: { name: 'Elon', subname: 'Mask' },
          profilePic: 'https://drive.google.com/uc?export=view&id=1AbVuYe0VdVX3xMLEj7du9XQ0O6HJru2u',
          email: 'elonmask@gmail.com',
          age: 35,
          job: 'Buisnessman',
          workExp: 25,
          description: 'I\'m richest man on the whole world. My mission is improve the humanity using the last technologies.'
        },
        {
          id: 2,
          personName: { name: 'María', subname: 'García Cueto' },
          profilePic: 'https://drive.google.com/uc?export=view&id=12AUMDitfhUAY1QyZfbE25kfTtzDXjlqW',
          email: 'mariadb@outlook.com',
          age: 45,
          job: 'BD Managment',
          workExp: 27,
          description: 'I\'m the one in charge of Data Bases from Mercadona.'
        },
        {
          id: 3,
          personName: { name: 'José', subname: 'Strauss López' },
          profilePic: 'https://drive.google.com/uc?export=view&id=1-2xc-qOfpOsUed-5Tx1aiL7SKrprgxaX',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 4,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: '',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 5,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: '',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 6,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: '',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 7,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: '',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
    );
  }

  countRows(): number {
    return Math.ceil( this.peopleList.length / 3 );
  }

}
