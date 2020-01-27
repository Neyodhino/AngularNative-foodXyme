import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";

import { Item, Category } from "../core/service/dataModel";
import { DataService } from "../core/service/dataService";

@Component({
    selector: "Vendors",
    templateUrl: "./vendors.component.html",
    styleUrls: ["./vendors.component.scss"]
})
export class VendorsComponent implements OnInit {

    items: Array<Item>;
    categories: Array<Category>;

    constructor(private dataService: DataService, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
    }

    ngOnInit(): void {
        // Init your component properties here.,
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    showItem(itemId) {
        console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["vendor/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

    categoryIcon(itemCategory) {
        switch (itemCategory) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    }

    toggleLike(item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        } else {
            item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }
}

