import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MatchDetailsComponent } from "./match-details.component";

const routes: Routes = [
    { path: "", component: MatchDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MatchDetailsRoutingModule { }
