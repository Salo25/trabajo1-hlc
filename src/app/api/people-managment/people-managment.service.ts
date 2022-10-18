import { Injectable } from '@angular/core';

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
  profilePic?: string;
  email: string;
  age: number;
  job?: string;
  workExp: number;
  biography?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleManagmentService {
  protected _peopleList: Person[];

  constructor() { }

  set setPeople(people: Person[]) {
    this._peopleList = people;
  }

  get getPeople(): Person[] {
    return this._peopleList;
  }

  addPerson(person: Person): void {
    this._peopleList.push(person);
  }
  deletePerson(id: number): void {
    let pruebaPeople: Person[] = this._peopleList.filter( (value: Person, index: number, peopleList: Person[]) => value.id !== id);

    console.log(pruebaPeople);
    /*
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i < this.peopleList.length; ++i) {
      if (this.peopleList[i].id === _id) {
        this.peopleList.filter();
      }
    }
    */
  }
}
