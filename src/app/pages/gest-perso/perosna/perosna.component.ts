import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/api/people-managment/people-managment.service';
import { GestPersoPageRoutingModule } from '../gest-perso-routing.module';


@Component({
  selector: 'app-perosna',
  templateUrl: './perosna.component.html',
  styleUrls: ['./perosna.component.scss'],
})
export class PerosnaComponent implements OnInit, OnChanges {
  @Input() person: Person;
  //protected peopleList: PeopleManagmentService;
  protected _myStyle: string = 'display: none';
  //protected _appPersonClass: string = '';
  private _deploy: boolean = false;
  @Input() set deploy(collapse: boolean) { this._deploy = collapse};
  get deploy(): boolean { return this._deploy}
  //@Output() deployPersonEvent = new EventEmitter();

  constructor(private cd: ChangeDetectorRef/*peopleMng: PeopleManagmentService*/) { /*this.peopleList = peopleMng;*/ }


  deployPersonEvent3(): void {
    //this._deploy = !this._deploy;
    this.deploy = !this.deploy;
    console.log('deployPersonEvent3 works ' + this._deploy);
    //this.cd.markForCheck();
    console.log('deployPersonEvent3 before ChangeDetectorRef works ' + this._deploy);
    this.deployPerson();
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    //this.deployPerson(this._deploy);
    console.log('ngOnChanges running');
  }

  ngOnInit() {
    /*
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
    */
  }

  deployPerson(/*elementId: string isDeployed: boolean*/): void {
    //document.getElementById(elementId).style.display = 'block';
    //this._appPersonClass = 'deployMode';
    /*
    if (isDeployed) {
      this._myStyle = 'display: block';
    } else {
      this._myStyle = 'display: none';
    }
    */
    if (this._deploy) {
      this._myStyle = 'display: block';
    } else {
      this._myStyle = 'display: none';
    }
   //this.deploy = !this.deploy;
  }

}
