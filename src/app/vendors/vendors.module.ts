import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VendorsRoutingModule } from "./vendors-routing.module";
import { VendorsComponent } from "./vendors.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VendorsRoutingModule
    ],
    declarations: [
        VendorsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VendorsModule { }
