import { ApiService } from "./../../services/api.service";
import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  data: any = {};
  err: any = {};
  showpassword = false;
  constructor(
    private navCtrl: NavController,
    private util: UtilService,
    private api: ApiService
  ) {}

  ngOnInit() {}

  doForgot() {
    this.navCtrl.navigateForward("/forgot-password");
  }

  // doSignIn() {
  //   console.log("kk");
  //   //return;
  //   localStorage.setItem("isLogin", "true");
  //   this.navCtrl.navigateForward("/phone-number");
  // }
  doSignIn() {
    localStorage.setItem("isLogin", "true");
    this.data.device_token = this.api.deviceToken;
    
    this.util.startLoad();
    this.api.postData("login", this.data).subscribe(
      (res: any) => {
        if (res.success) {
          this.util.dismissLoader();
          this.err = "";
          this.util.presentToast(res.msg);

          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            // =======================set id==================
            localStorage.setItem("id", res.data.id);
            // console.log(res.data);
            localStorage.setItem("appUser_type", res.data.appUser_type);
            this.api.userToken = res.data.token;
            // ========================if user=0 \ vendor=1================
            if(res.data.appUser_type == 0) 
            this.navCtrl.navigateForward("/tabs/home");
            else
            this.navCtrl.navigateForward("/history");
// =================================End=================================================
          } 
          else {
          }
        } else {
          this.util.dismissLoader();
          this.err = "";
          this.util.presentToast(res.msg);
        }
      },
      (err) => {
        this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );
  }

  doSignUp() {
    this.navCtrl.navigateForward("/signup");
  }
}
