import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorSignupPageRoutingModule } from './vendor-signup-routing.module';

import { VendorSignupPage } from './vendor-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorSignupPageRoutingModule
  ],
  declarations: [VendorSignupPage]
})
export class VendorSignupPageModule {}
