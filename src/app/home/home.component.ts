import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { MatchService } from "../match.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    n:Number;
    winner:string="";
  constructor(private matchService:MatchService){}


    ngOnInit(): void {
    this.matchService.GetAllMatchs().subscribe(data => { if(data[62]!=undefined){
      if(data[62].scorea<data[62].scoreb)this.winner=data[62].teams[1].name;
    else if (data[62].scorea>data[62].scoreb)this.winner=data[62].teams[0].name;
    else if (data[62].scorea==data[62].scoreb){
      if((data[62].penoa>data[62].penob))this.winner=data[62].teams[0].name;
      else this.winner=data[62].teams[1].name;
    }}

    });
    }

    win(){
  if(this.winner=="")return false;
  else return true;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
