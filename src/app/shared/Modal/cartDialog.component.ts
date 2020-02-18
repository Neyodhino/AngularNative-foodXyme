import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cart-dialog',
    templateUrl: './cartDialog.component.html',
    styleUrls: ['./cartDialog.component.scss']
})
export class CartDialogComponent implements OnInit {

    counter: number = 1;
    minimumCounter = 1;
    setFlag: boolean = true;
    constructor() {}

    increaseCounter() {
        this.counter = this.counter + 1;
    }
    decreaseCounter() {
        if (this.counter > this.minimumCounter) {
            this.setFlag = false;
            this.counter = this.counter - 1;
        } else {
            this.setFlag = true;
        }
    }

    ngOnInit(): void {}
}
