import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gerenteAuthGuard } from './gerente-auth.guard';

describe('gerenteAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gerenteAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
