import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { CartDialogComponent } from '../shared/Modal/cartDialog.component';
import { IVendor } from '../shared/inteerfaces';
import { DataService } from "../core/service/dataService";

@Component({
    selector: "vendor",
    templateUrl: "./vendor.component.html",
    styleUrls: ["./vendor.component.scss"]
})
export class VendorComponent implements OnInit {
    itemId: number;
    item;
    data;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private dataService: DataService,
        private page: Page,
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef
        ) {

        this.page.actionBarHidden = true;

        // this.pageRoute.activatedRoute.pipe(
        //     switchMap((activatedRoute) => activatedRoute.params)
        // ).forEach((params) => {
        //     this.itemId = +params["id"];
        //     console.log(this.itemId);
        //     this.dataService.getSwallow().subscribe((response) => {
        //     this.item = response.data;
        //     console.log(this.item);
        // }, (error) => console.log(error));
        // });

        this.data = this.dataService.getSwallow();
        console.log(this.data);
    }

    ngOnInit(): void {}

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    openModal(item) {
        this.modalDialog.showModal(CartDialogComponent, {
            fullscreen: false,
            viewContainerRef: this.vcRef,
            context: {
                stockItem: item
            }
        });
    }

}
