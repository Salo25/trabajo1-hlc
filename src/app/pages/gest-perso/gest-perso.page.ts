import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { PeopleManagmentService, Person } from 'src/app/api/people-managment/people-managment.service';

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
  //protected peopleList: Person[];
  protected peopleList: PeopleManagmentService;
  private atras: Location;
  expanded:  boolean = false;


  constructor(_atras: Location, peopleMng: PeopleManagmentService) { this.atras = _atras; this.peopleList = peopleMng; }


  irAtras() {
    this.atras.back();
  }
  ngOnInit() {
    const DEFAULT_AVATAR_PATH = '/../assets/default_avatar.svg';
    this.peopleList.setPeople =
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
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 5,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 6,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 7,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
    );
  }

  expandSelect(): void {
    //this.expanded = !this.expanded;
    //this.personComponent.deployPersonEvent3();
  }

/*
  countRows(): number {
    return Math.ceil( this.peopleList.length / 3 );
  }
  */
}
