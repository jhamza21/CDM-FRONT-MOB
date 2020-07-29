import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MatchListRoutingModule } from "./matchlist-routing.module";
import { MatchListComponent } from "./match-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MatchListRoutingModule
    ],
    declarations: [
        MatchListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MatchListModule { }
