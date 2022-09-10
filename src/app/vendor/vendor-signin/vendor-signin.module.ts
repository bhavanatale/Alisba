import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorSigninPageRoutingModule } from './vendor-signin-routing.module';

import { VendorSigninPage } from './vendor-signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorSigninPageRoutingModule
  ],
  declarations: [VendorSigninPage]
})
export class VendorSigninPageModule {}
