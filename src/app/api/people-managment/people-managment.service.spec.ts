import { TestBed } from '@angular/core/testing';

import { PeopleManagmentService } from './people-managment.service';

describe('PeopleServiceService', () => {
  let service: PeopleManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
