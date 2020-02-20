import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "cart-dialog",
    templateUrl: "./cartDialog.component.html",
    styleUrls: ["./cartDialog.component.scss"]
})
export class CartDialogComponent implements OnInit {

    counter: number = 1;
    setFlag: boolean = true;
    stockItemId: number;
    stockItemPrice: number;
    stockItemName: string;
    stockTotalPrice: number;
    stockItemDetails;
    constructor(
        private params: ModalDialogParams
    ) {
        // this.stockItemId = params.context.stockId;
        // this.stockItemPrice = params.context.stockPrice;
        // this.stockItemName = params.context.stockName;
        // this.stockTotalPrice = this.stockItemPrice;
        this.stockItemDetails = params.context.stockItem;
        console.log(this.stockItemDetails);
    }

    increaseCounter() {
        this.counter = this.counter + 1;
        this.stockTotalPrice = this.stockTotalPrice + this.stockItemPrice;
    }
    decreaseCounter() {
        if (this.counter > 1) {
            this.setFlag = false;
            this.counter = this.counter - 1;
            this.stockTotalPrice = this.stockTotalPrice - this.stockItemPrice;
        } else {
            this.setFlag = true;
        }
    }

    addToCart() {
        console.log(this.stockTotalPrice);
    }

    ngOnInit(): void {}
}

