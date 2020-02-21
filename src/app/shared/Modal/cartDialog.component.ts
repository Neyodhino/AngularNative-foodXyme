import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import * as appSettings from 'tns-core-modules/application-settings';

@Component({
    selector: "cart-dialog",
    templateUrl: "./cartDialog.component.html",
    styleUrls: ["./cartDialog.component.scss"]
})
export class CartDialogComponent {

    counter: number = 1;
    setFlag: boolean = true;
    stockTotalPrice: number;
    stockItemDetails;
    database: any;
    constructor(
        private params: ModalDialogParams
    ) {
        this.stockItemDetails = params.context.stockItem;
        this.stockTotalPrice = this.stockItemDetails.stockprice;
    }

    increaseCounter() {
        this.counter = this.counter + 1;
        this.stockTotalPrice = this.stockTotalPrice + this.stockItemDetails.stockprice;
    }
    decreaseCounter() {
        if (this.counter > 1) {
            this.setFlag = false;
            this.counter = this.counter - 1;
            this.stockTotalPrice = this.stockTotalPrice - this.stockItemDetails.stockprice;
        } else {
            this.setFlag = true;
        }
    }

    query() {
        console.log(appSettings.getString("cart"));
    }

    addToCart(itemName, itemQuantity, itemPrice) {
        let itemStored = appSettings.getString("cart");
        let itemSelected = {
            "itemName": itemName,
            "itemQuantity": itemQuantity,
            "itemPrice": itemPrice
        };
        if (itemStored == undefined) {
            let dataStored = [];
            dataStored.push(itemSelected);
            let stringifyData = JSON.stringify(dataStored);
            appSettings.setString("cart", stringifyData)
        }else {
            let serialisedData = JSON.parse(itemStored);
            serialisedData.push(itemSelected);
            let sd = JSON.stringify(serialisedData);
            appSettings.setString("cart", sd);
        }
    }
}
