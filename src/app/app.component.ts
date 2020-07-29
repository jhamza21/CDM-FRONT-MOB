import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { PoulesService } from "./poules.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",

})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions,private ps:PoulesService) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
    generer_pool(){
        this.ps.GenererPool().subscribe(data => {  console.log(data);
         if(data)alert("Group stage is ready");if(!data)alert("Check matchs !"); }
        , error => {console.log(error) ,alert("ERROR !"); });
      }
      generer_pool_p(){
        this.ps.GenererPoolP().subscribe(data => {   if(data)alert("Knockout stage is ready");
        if(!data)alert("Check matchs !");}
        , error => {console.log(error) ,alert("Error !");});
      }
      generer_pool_g(){
        this.ps.GenererPoolG().subscribe(data => {   if(data)alert("Quarter-finals is ready");
        if(!data)alert("Check matchs !");}
        , error => {console.log(error) ,alert("Error !");});
      }
      generer_pool_s(){
        this.ps.GenererPoolS().subscribe(data => {   if(data)alert("Semi-finals is ready");
        if(!data)alert("Check matchs !");}
        , error => {console.log(error) ,alert("Error!");});

      }
      generer_pool_f(){
        this.ps.GenererPoolF().subscribe(data => {   if(data){alert("Final is ready");};
        if(!data)alert("Check matchs !");}
        , error => {console.log(error) ,alert("Error !");});

      }
}
