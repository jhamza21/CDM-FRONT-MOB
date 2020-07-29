import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'createteam', loadChildren: () => import("~/app/create-team/createteam.module").then((m) => m.CreateTeamModule) },
    { path: 'detailsteam/:id', loadChildren: () => import("~/app/team-details/teamdetails.module").then((m) => m.TeamDeatailsModule) },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "poules", loadChildren: () => import("~/app/poules-list/poulelist.module").then((m) => m.PouleListModule) },
    { path: "teams", loadChildren: () => import("~/app/team-list/teamlist.module").then((m) => m.TeamListModule) },
    { path: "matchs/:who", loadChildren: () => import("~/app/match-list/matchlist.module").then((m) => m.MatchListModule) },
    { path: 'detailsmatch/:id', loadChildren: () => import("~/app/match-details/matchdetails.module").then((m) => m.MatchDetailsModule) },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
