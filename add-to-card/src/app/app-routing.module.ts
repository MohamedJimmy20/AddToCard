import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CARDComponent } from './Components/card/card.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path: '' ,redirectTo: 'products', pathMatch:'full'},
  {path:`products`, component: ProductsComponent},
  {path:`card`, component: CARDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
