import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ListBillComponent } from './components/bills/list-bill/list-bill.component';
import { AddBillComponent } from './components/bills/add-bill/add-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    BudgetComponent,
    ListBillComponent,
    AddBillComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
