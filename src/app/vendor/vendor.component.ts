import { Component, OnInit } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Item } from "../core/service/dataModel";
import { DataService } from "../core/service/dataService";

@Component({
    selector: "vendor",
    templateUrl: "./vendor.component.html",
    styleUrls: ["./vendor.component.scss"]
})
export class VendorComponent implements OnInit {
    itemId: number;
    item: Item;
    items: Array<Item>;
    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        // private page: Page,
        private dataService: DataService) {

        this.items = this.dataService.getItems();

        // this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap((activatedRoute) => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];
            this.item = this.items.filter(item => item.id == this.itemId)[0];
        });
    }

    ngOnInit(): void { }


    toggleLike() {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        } else {
            this.item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon() {
        switch (this.item.categoryTag) {
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

    onCloseTap(): void {
        this.routerExtensions.back();
    }
}