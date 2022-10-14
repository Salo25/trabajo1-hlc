import { Component, OnInit } from '@angular/core';


type FullName = {
  name: string;
  subname: string;
};
type PhoneNum = {
  countryID: number;
  phone: number;
};
interface Person {
  id: number;
  personName: FullName;
  email: string;
  age: number;
  job: string;
  workExp: number;
  description: string;
}

@Component({
  selector: 'app-perosna',
  templateUrl: './perosna.component.html',
  styleUrls: ['./perosna.component.scss'],
})
export class PerosnaComponent implements OnInit {
  peopleList: Person[];

  constructor() { }

  ngOnInit() {
    this.peopleList =
      Array<Person>(
        {
          id: 1,
          personName: { name: 'Elon', subname: 'Mask' },
          email: 'elonmask@gmail.com',
          age: 35,
          job: 'Buisnessman',
          workExp: 25,
          description: 'I\'m richest man on the whole world. My mission is improve the humanity using the last technologies.'
        },
        {
          id: 2,
          personName: { name: 'María', subname: 'García Cueto' },
          email: 'mariadb@outlook.com',
          age: 45,
          job: 'BD Managment',
          workExp: 27,
          description: 'I\'m the one in charge of Data Bases from Mercadona.'
        },
        {
          id: 3,
          personName: { name: 'José', subname: 'Strauss López' },
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          description: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        }
    );
  }

}
