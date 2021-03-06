import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TypeProductComponent } from './type-product/type-product.component';

const routes: Routes = [

  {path:'products', component:ProductsComponent},
  {path:'typeProducts', component:TypeProductComponent},
  {path:'**', redirectTo: 'products'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
