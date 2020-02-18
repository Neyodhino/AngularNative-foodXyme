import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartDialogComponent } from './Modal/cartDialog.component';

@NgModule({
    declarations: [
        CartDialogComponent
    ],
    imports: [ CommonModule ],
    exports: [],
    entryComponents: [CartDialogComponent],
    providers: []
})
export class SharedModule {}
