import { Component, OnInit } from '@angular/core';
import { Pool } from '../pool';
import { PoulesService } from '../poules.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';


@Component({
  selector: 'app-poules-list',
  templateUrl: './poules-list.component.html',
  styleUrls: ['./poules.css'],


})
export class PoulesListComponent implements OnInit {
p:Observable<Pool>;
exist:boolean;
  constructor(private poulesService:PoulesService){}

  ngOnInit():void {

    this.poulesService.GetAllPools().subscribe(data => this.p=data);
    this.poulesService.GetAllPools().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      });
  }
  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}


}
