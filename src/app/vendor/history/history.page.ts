import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../services/api.service";
import { UtilService } from "./../../services/util.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private navCtrl: NavController,
    private util: UtilService,
    private api: ApiService) { }

  ngOnInit() {
  //   this.api.getHistory().subscribe(res =>{
  //   console.log(res);
  // })
  }

}
