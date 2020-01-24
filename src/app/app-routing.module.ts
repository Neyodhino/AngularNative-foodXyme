import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { VendorComponent } from "./vendor/vendor.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then(m => m.HomeModule) },
    { path: "vendors", loadChildren: () => import("~/app/vendors/vendors.module").then(m => m.VendorsModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then(m => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then(m => m.SettingsModule) },
    { path: "vendor/:id", component: VendorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
