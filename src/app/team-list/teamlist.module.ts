import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeamListRoutingModule } from "./teamlist-routing.module";
import { TeamListComponent } from "./teamlist.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamListRoutingModule
    ],
    declarations: [
        TeamListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeamListModule { }
