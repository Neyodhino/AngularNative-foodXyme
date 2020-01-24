import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

import { DataService } from "./service/dataService";
import { TokenInterceptor } from './interceptors/tokenInterceptors';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [HttpClientModule],
    providers: [
        DataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}

