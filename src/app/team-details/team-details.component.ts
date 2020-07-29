import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team.css']

})
export class TeamDetailsComponent implements OnInit {

  id: number;
  t: Team;

  constructor(private route: ActivatedRoute,
    private teamService: TeamService) { }

  ngOnInit() {
    this.t = new Team();

    this.id = +this.route.snapshot.params.id;

    this.teamService.DetailsTeam(this.id)
      .subscribe(data =>
        this.t = data, error =>alert(error));
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
