import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CreateTeamRoutingModule } from "./createteam-routing.module";
import { CreateTeamComponent } from "./create-team.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreateTeamRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CreateTeamComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreateTeamModule { }
