import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  remaining: number;
  listBills: Subject<any>;

  constructor() {
    this.budget = 0;
    this.remaining = 0;
    this.listBills = new Subject();
  }

  addBill(bill: object) {
    this.listBills.next(bill);
  }

  getBills(): Observable<any> {
    return this.listBills.asObservable();
  }
}
