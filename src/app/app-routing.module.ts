import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


const routes: Routes = [
  
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'p', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'inventory', component: InventoryComponent },
  { path: 'order-details', component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
