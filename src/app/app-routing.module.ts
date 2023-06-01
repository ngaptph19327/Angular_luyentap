import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: "", component: ListProductComponent },
  { path: "add", component: AddProductComponent },
  { path: "update/:id", component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
