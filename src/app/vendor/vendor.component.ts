import { Component, OnInit } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page } from "tns-core-modules/ui/page/page";

import { IVendor } from '../shared/inteerfaces';
import { DataService } from "../core/service/dataService";

@Component({
    selector: "vendor",
    templateUrl: "./vendor.component.html",
    styleUrls: ["./vendor.component.scss"]
})
export class VendorComponent implements OnInit {
    itemId: number;
    vendorInfo: IVendor;
    vendorStockList;
    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private dataService: DataService,
        private page: Page
        ) {

        this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap((activatedRoute) => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];
            console.log(this.itemId);
            this.dataService.getApiVendor(this.itemId).subscribe((response) => {
                this.vendorInfo = response.vendor;
                this.vendorStockList = response.stock_list;
                console.log(this.vendorInfo);
                console.log(this.vendorStockList);
            }, (error) => console.log(error));
        });
    }

    ngOnInit(): void {}

    onCloseTap(): void {
        this.routerExtensions.back();
    }
}
