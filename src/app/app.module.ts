import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VendorComponent } from "./vendor/vendor.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        CoreModule,
        SharedModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        VendorComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
