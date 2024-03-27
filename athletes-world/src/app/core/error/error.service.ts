import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$$ = new BehaviorSubject(null);
  public error$ = this.error$$.asObservable();

  constructor() { }

  handleError(error: any) {
    this.error$$.next(error);
    return this.error$;
  }
}
