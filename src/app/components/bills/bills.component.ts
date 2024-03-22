import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent {
  constructor(private _budgetService: BudgetService, private router: Router) {
    if (this._budgetService.budget === 0) {
      this.router.navigate(['/ingresar-presupuesto']);
    }
    console.log(this._budgetService.budget);
  }
}
