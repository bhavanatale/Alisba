import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorSignupPage } from './vendor-signup.page';

const routes: Routes = [
  {
    path: '',
    component: VendorSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorSignupPageRoutingModule {}
