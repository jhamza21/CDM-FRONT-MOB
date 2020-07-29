import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./team.css']

})
export class CreateTeamComponent implements OnInit {
  t: Team = new Team();
  teams:  Team[]=null;
  nb:number=0;


  constructor(private ms: TeamService,private routerExtensions: RouterExtensions){}

  ngOnInit() {
    this.ms.GetAllTeams() .subscribe(data => {
      if(data.length==32){alert("Teams number is max"); this.routerExtensions.back();
    };
      this.nb=data.length;
    });
      }
      confirm() {

        dialogs.action("Enter Team", "Cancel",  ["TUNISIA","TURKEY","JAPAN","FRANCE","ITALY","GERMANY","RUSSIA","KOREA","ALGERIA","MOROCCO",
        "CHINA","ARGENTINA","AUSTRALIA","BELGIUM","BRAZIL","CANADA","CAMEROON","CHILE","CHAD","COLOMBIA","CROATIA",
        "COSTA RICA","EGYPT","FINLAND","GABON","GHANA","GREECE","ICELAND","IVORY COAST","KUWAIT","LUXEMBOURG",
        "MALI","MEXICO","NETHERLANDS","NEW ZEALAND","PALESTINE","QATAR","SPAIN","SWEDEN","UKRAINE","URUGUAY","NIGERIA",
        "PORTUGAL","ROMANIA","UNITED KINGDOM","SENEGAL","IRELAND","ECUADOR"]).then(result => {
           if(result!="Cancel")
           this.t.name=result;
        });

    }
  save() {

      if(this.t.name==null||this.t.nbrplayer==null||this.t.nbrstaff==null)alert("Verify form");
      else{

    this.t.point=0;
    this.t.gameplayed=0;
    this.ms.CreateTeam(this.t)
      .subscribe(data => {
        if(data)alert("Team created");if(!data)alert("Team not created"); this.routerExtensions.back();},
         error => {alert("Team not created")});
    this.t = new Team();
      }
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
