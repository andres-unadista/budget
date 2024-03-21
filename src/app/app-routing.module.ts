import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { BillsComponent } from './components/bills/bills.component';
import { BudgetComponent } from './components/budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar-presupuesto', pathMatch: 'full' },
  { path: 'ingresar-presupuesto', component: BudgetComponent },
  { path: 'gastos', component: BillsComponent },
  { path: '**', redirectTo: 'ingresar-presupuesto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
