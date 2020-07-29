import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreateTeamComponent}from "./create-team.component"

const routes: Routes = [
    { path: "", component:  CreateTeamComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreateTeamRoutingModule { }
