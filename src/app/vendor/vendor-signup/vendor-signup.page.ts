import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.page.html',
  styleUrls: ['./vendor-signup.page.scss'],
})
export class VendorSignupPage implements OnInit {
  data: any = {};
  err: any = {};
  error_msg;
  s: string;
  showpassword = false;
  isTextFieldType: boolean;

  constructor(
    private navCtrl: NavController,
    public http: HttpClient,
    public nav: NavController,
    public router: Router,
    private api: ApiService,
    private util: UtilService
  ) {}

  ngOnInit() {}
  doSignUp() {
    // localStorage.setItem("isLogin", "true");
    this.data.device_token = this.api.deviceToken;
    this.data.appUser_type = 1;
    console.log(this.data);
    this.util.startLoad();
    this.api.postData("register", this.data).subscribe(
      (res: any) => {
        if (res.success) {
          this.util.dismissLoader();
          this.util.presentToast(res.msg);
          if (res.data.token) {
            this.navCtrl.navigateRoot("/signin");
            localStorage.setItem("token", res.data.token);
            this.api.userToken = res.data.token;
          } 
          else 
          {
            if (res.flow == "verification") {
              this.api.verifyMo = this.data.phone_no;
              this.navCtrl.navigateForward("/phone-number");
            }
          }
        }
      },
      (err) => {
        this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );
  }
  togglePasswordFieldType() 
  {
    this.isTextFieldType = !this.isTextFieldType;
  }
  // doSignIn() {
  //   this.navCtrl.navigateForward("/signin");
  // }
 
}

