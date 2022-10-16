import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Person } from 'src/app/api/people-managment/people-managment.service';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss'],
})
export class PersonModalComponent implements OnInit {
  private _person: Person;
  @ViewChild(IonModal) modal: IonModal;

  set setPerson(templatePerson: Person) { this._person = templatePerson }
  get getPerson(): Person { return this._person }

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  dissmisEvent(event: Event) {
    const ev = event as CustomEvent< OverlayEventDetail<string> >;
  }
}
