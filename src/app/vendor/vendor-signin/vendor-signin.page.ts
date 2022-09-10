import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vendor-signin',
  templateUrl: './vendor-signin.page.html',
  styleUrls: ['./vendor-signin.page.scss'],
})
export class VendorSigninPage implements OnInit {
  data: any = {};
  err: any = {};
  showpassword = false;
  isTextFieldType: boolean;

  constructor(
    private navCtrl: NavController,
 
  ) {}

  ngOnInit() {}

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }
  doSignIn() {
    console.log("kk");
    //return;
    localStorage.setItem("isLogin", "true");
    this.navCtrl.navigateForward("/history");

    
  }

  
}