import { Component, Input, OnInit } from '@angular/core';


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
  description?: string;
}

@Component({
  selector: 'app-perosna',
  templateUrl: './perosna.component.html',
  styleUrls: ['./perosna.component.scss'],
})
export class PerosnaComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {}

}
