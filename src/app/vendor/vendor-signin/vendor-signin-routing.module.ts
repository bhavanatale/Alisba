import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorSigninPage } from './vendor-signin.page';

const routes: Routes = [
  {
    path: '',
    component: VendorSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorSigninPageRoutingModule {}
