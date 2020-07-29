import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeamDetailsRoutingModule } from "./teamdetails-routing.module";
import { TeamDetailsComponent } from "./team-details.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamDetailsRoutingModule
    ],
    declarations: [
        TeamDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeamDeatailsModule { }
