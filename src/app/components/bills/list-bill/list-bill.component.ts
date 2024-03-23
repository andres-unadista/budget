import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss'],
})
export class ListBillComponent implements OnInit, OnDestroy {
  bills: any[];
  subscription: Subscription;
  budget: number;
  remaining: number;

  constructor(private _budgetService: BudgetService) {
    this.bills = [];
    this.budget = 0;
    this.remaining = 0;
    this.subscription = this._budgetService.getBills().subscribe((bill) => {
      this.remaining -= bill.count;
      this.bills.push(bill);
    });
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }

  getClassRemaining() {
    if (this.budget / 4 > this.remaining) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.remaining) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
