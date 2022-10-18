import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleManagmentService, Person } from 'src/app/api/people-managment/people-managment.service';
import { IonModal } from '@ionic/angular';  //Elimar al finalizar
import { OverlayEventDetail } from '@ionic/core/components';  //Eliminar al terminar

interface TemPerson {
  id?:             number,
  personName?:     [string?, string?],
  profilePic?:     string,
  email?:          string,
  age?:            number,
  job?:            string,
  workExp?:        number,
  biography?:      string
}

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
  biography: string;
}
*/
@Component({
  selector: 'app-gest-perso',
  templateUrl: './gest-perso.page.html',
  styleUrls: ['./gest-perso.page.scss'],
})
export class GestPersoPage implements OnInit, OnChanges {
  //protected peopleList: Person[];
  //protected peopleList: PeopleManagmentService;
  private atras: Location;
  expanded:  boolean = false;
  private _temPerson: TemPerson = {
    id:              null,
    personName:      [null, null],
    profilePic:      null,
    email:           null,
    age:             0,
    job:             null,
    workExp:         0,
    biography:       null
  }
  form: FormGroup = this.formService.group(
    {
      personName: this.formService.group(
        {
          name:    [ '', Validators.required ],
          subname: [ '', Validators.required ]
        }
      ),
      profilePic: [ '' ],
      email:      [ '', [Validators.required, Validators.email] ],
      age:        [ '', [Validators.required, Validators.min(0)] ],
      job:        [ '' ],
      workExp:    [ '', [Validators.required, Validators.min(0)] ],
      biography:  [ '' ]
    }
  );

  //#region Prueba Modal
  private _person: Person;
  @ViewChild(IonModal) modal: IonModal;

  set setPerson(templatePerson: Person)    { this._person = templatePerson }
  set temPerson(person: TemPerson)         { this._temPerson = person }
  get getPerson(): Person                  { return this._person }
  get temPerson(): TemPerson               { return this._temPerson }
  //#endregion


  constructor(_atras: Location, /*peopleMng: PeopleManagmentService,*/ protected peopleList: PeopleManagmentService, private formService: FormBuilder ) 
  { this.atras = _atras; /* this.peopleList = peopleMng;*/ }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("Sincronizado");
  }


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
          biography: 'I\'m richest man on the whole world. My mission is improve the humanity using the last technologies.'
        },
        {
          id: 2,
          personName: { name: 'María', subname: 'García Cueto' },
          profilePic: 'https://drive.google.com/uc?export=view&id=12AUMDitfhUAY1QyZfbE25kfTtzDXjlqW',
          email: 'mariadb@outlook.com',
          age: 45,
          job: 'BD Managment',
          workExp: 27,
          biography: 'I\'m the one in charge of Data Bases from Mercadona.'
        },
        {
          id: 3,
          personName: { name: 'José', subname: 'Strauss López' },
          profilePic: 'https://drive.google.com/uc?export=view&id=1-2xc-qOfpOsUed-5Tx1aiL7SKrprgxaX',
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          biography: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 4,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          biography: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 5,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          biography: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 6,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          biography: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
        {
          id: 7,
          personName: { name: 'Pepe', subname: 'Strauss López' },
          profilePic: DEFAULT_AVATAR_PATH,
          email: 'josegoldengatebridge@yahoo.com',
          age: 51,
          job: 'Civil Engineer',
          workExp: 38,
          biography: 'I\'m one of the most famous engineers in the worl. I built Golden Gate Bridge in San Francisco.'
        },
    );


    //#region Form Syncrono
    // this.form.setValue(
    //   {
    //     personName: this.formService.group(
    //       {
    //         name:    [ this.temPerson[0], Validators.required ],
    //         subname: [ this.temPerson[1], Validators.required ]
    //       }
    //     ),
    //     profilePic: [ '' ],
    //     email:      [ '', [Validators.required, Validators.email] ],
    //     age:        [ this.temPerson.age, [Validators.required, Validators.min(0)] ],
    //     job:        [ '' ],
    //     workExp:    [ '', [Validators.required, Validators.min(0)] ],
    //     biography:  [ '' ]
    //   }
    // );

    // console.log("Sincronizacion en OnInit");
    //#endregion
  }

  expandSelect(): void {
    //this.expanded = !this.expanded;
    //this.personComponent.deployPersonEvent3();
  }

  //#region Prueaba modal metodos
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.form, 'confirm');
  }

  dissmisEvent(event: Event) {
    const ev = event as CustomEvent< OverlayEventDetail<string> >;

    if (ev.detail.role === 'confirm') {
      console.log(this.form.value);
      console.log(this.form.valid);

      //this.peopleList.addPerson();
    }
  }
  //#endregion

  onSubmit() {
    
  }
/*
  countRows(): number {
    return Math.ceil( this.peopleList.length / 3 );
  }
  */
}
