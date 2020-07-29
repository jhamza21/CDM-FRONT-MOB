import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MatchDetailsRoutingModule } from "./matchdetails-routing.module";
import { MatchDetailsComponent } from "./match-details.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MatchDetailsRoutingModule
    ],
    declarations: [
        MatchDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MatchDetailsModule { }
