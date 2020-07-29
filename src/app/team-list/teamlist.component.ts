import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Observable } from "rxjs";
import { TeamService } from "../team.service";
import { Team } from "../team";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Team",
    templateUrl: "./teamlist.component.html",
    styleUrls: ['./teams.css']

})
export class TeamListComponent implements OnInit {

    teams: Observable<Team[]>;

    constructor(private teamService: TeamService,private routerExtensions: RouterExtensions){}

    ngOnInit():void {
     this.teamService.GetAllTeams().subscribe(data=>this.teams=data,error=>alert(error));
    }
    deleteTeam(id: number) {
        this.teamService.DeleteTeam(id)
          .subscribe(
            data => {
              alert("Team deleted !");
              this.routerExtensions.back();
            },
            error =>
            alert("Team can't be deleted !"));
          }



    onDrawerButtonTap(): void {

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
