import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { VendorsComponent } from "./vendors/vendors.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "vendors", component: VendorsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class HomeRoutingModule { }
