import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent {
  count: number | null;
  countStatus: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.count = null;
    this.countStatus = false;
  }

  addBudget() {
    if (this.count === null) return;

    if (this.count > 0) {
      this.countStatus = false;
      this._budgetService.budget = this.count;
      this._budgetService.remaining = this.count;
      this.router.navigate(['/gastos']);
    } else {
      this.countStatus = true;
    }
  }
}
