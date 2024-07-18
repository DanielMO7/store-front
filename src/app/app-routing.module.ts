import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },

  { path: 'products', component: ProductsComponent},
  { path: 'stock', component: StockComponent},
  { path: 'customers', component: CustomersComponent},

  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
