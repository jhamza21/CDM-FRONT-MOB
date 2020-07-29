import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TeamDetailsComponent}from "./team-details.component"

const routes: Routes = [
    { path: "", component:  TeamDetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TeamDetailsRoutingModule { }
