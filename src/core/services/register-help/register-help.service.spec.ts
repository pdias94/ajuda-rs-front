import { TestBed } from '@angular/core/testing';

import { RegisterHelpService } from './register-help.service';

describe('RegisterHelpService', () => {
  let service: RegisterHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
