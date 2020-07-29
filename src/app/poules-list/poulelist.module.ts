import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PouleListRoutingModule } from "./poulelist-routing.module";
import { PoulesListComponent } from "./poules-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PouleListRoutingModule
    ],
    declarations: [
        PoulesListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PouleListModule { }
