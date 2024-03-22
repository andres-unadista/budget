import { Component } from '@angular/core';

import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent {
  count: number | null;
  name: string;
  textError: string;
  formIncorrect: boolean;

  constructor(private _budgetService: BudgetService) {
    this.count = null;
    this.name = '';
    this.textError = '';
    this.formIncorrect = false;
  }

  addBill() {
    if (this.count === null || this.name === '') {
      this.formIncorrect = true;
      this.textError = 'La cantidad y el nombre del gasto son obligatorios';
      return;
    }
    if (this.count > this._budgetService.remaining) {
      this.formIncorrect = true;
      this.textError = 'El gasto no puede ser mayor al presupuesto';
      return;
    }

    // create object
    const BILL = {
      name: this.name,
      count: this.count,
    };
    // push object
    this._budgetService.addBill(BILL);

    // clear form
    this.formIncorrect = false;
    this.textError = '';
  }
}
