import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { Products } from './products';

const routes: Routes = [
  
  
  {path:"add",component: AddComponent},
  {path:"list", component: ListComponent},
  {path:"update/:product.id", component: UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  product:Products[]=[]
}
