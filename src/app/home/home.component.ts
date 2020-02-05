import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { DataService } from "../core/service/dataService";
import { ICategories } from "../shared/inteerfaces";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    categories: Array<ICategories>;
    constructor(private routerExtensions: RouterExtensions, private dataService: DataService) {
        // Use the component constructor to inject providers.
        this.dataService.getApiCategory().subscribe((data) => {
            this.categories = data.categories;
            console.log(this.categories);
        },
        (error) => {
            console.log(error);
        });
    }

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
