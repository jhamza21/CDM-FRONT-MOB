import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { ActivatedRoute} from '@angular/router';
import { MatchService } from '../match.service';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

    id: number;
    m: Match;


    constructor(private route: ActivatedRoute,
      private matchService: MatchService) { }

    ngOnInit() {
      this.m = new Match();
      this.id = this.route.snapshot.params['id'];
      this.matchService.DetailsMatch(this.id)
        .subscribe(data => {
          console.log(data)
          this.m = data;
        }, error => console.log(error));
    }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}}
