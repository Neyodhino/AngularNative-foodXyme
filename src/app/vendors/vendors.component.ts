import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { DataService } from "../core/service/dataService";
import { IVendor } from "../shared/inteerfaces";

@Component({
  selector: "Vendors",
  templateUrl: "./vendors.component.html",
  styleUrls: ["./vendors.component.scss"]
})
export class VendorsComponent implements OnInit {
  vendors: Array<object>;
  idCategories: string;

  constructor(
    private dataService: DataService,
    private routerExtensions: RouterExtensions,
    private pageRoute: PageRoute
  ) {
    // Use the component constructor to inject providers.

    // this.pageRoute.activatedRoute.pipe(
    //     switchMap((activatedRoute) => activatedRoute.params)
    // ).forEach((params) => {
    //     this.idCategories = params["name"];
    //     this.dataService.getApiVendors(this.idCategories).subscribe(res => {
    //         this.vendors = res.data;
    //         console.log(this.vendors);
    //       });
    // });

    // this.dataService.getApiVendors().subscribe((response) => {
    //     this.vendors = response.data;
    //     console.log(this.vendors);
    // },
    // (error) => {
    //     console.log(error);
    // });

    this.vendors = this.dataService.getVendors();

  }

  ngOnInit(): void {
    // Init your component properties here.,
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
  showVendor(vendorId) {
    console.log(`Tapped on ${vendorId}`);
    this.routerExtensions.navigate(["vendor/" + vendorId, {
        animated: true,
        transition: {
            name: "slideTop",
            duration: 100,
            curve: "easeIn"
        }
    }]);
  }

}
