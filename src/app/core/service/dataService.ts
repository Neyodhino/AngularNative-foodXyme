import { Injectable } from "@angular/core";
import { Item, Category } from "./dataModel";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = "http://192.168.137.1:8000/";

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor(
        private http: HttpClient
    ) {

    }

    getApiCategory(): Observable<any> {
        return this.http.get(`${BASE_URL}api/categories`);
    }
    getApiVendors(): Observable<any> {
        // return this.http.get(`${BASE_URL}api/category/1`);
        return this.http.get(`${BASE_URL}api/vendors`);
    }
    getApiVendor(id: number): Observable<any> {
        return this.http.get(`${BASE_URL}api/vendor/${id}`);
    }
    

    getVendors() {
        return  [{
            "idvendors": 1,
            "manager_name": "Felix Ogungbe",
            "store_name": "Mr Banwil",
            "address": "OAU New Buka",
            "logo": "https://user-images.githubusercontent.com/17219534/71550968-65760a00-29dc-11ea-8869-effd1fc488c4.jpg",
             "phone_number": "08038393920",
             "status": 2,
             "description": "Get your food from any restaurant you wish",
            "user_id": 2,
            "category_id": 1,
            "region_id": 7,
            "rating": "4.0",
             "open_at": "7",
            "close_at": "12",
            "created_at": null,
            "updated_at": null,
             "idregions": 7,
            "name": "Restaurants",
            "city_id": 1,
             "idcategories": 1,
            "icon": "https://user-images.githubusercontent.com/17219534/71551256-43cc5100-29e3-11ea-9b79-199c4f622134.png"
           }, {
            "idvendors": 2,
             "manager_name": "Jaye Oluwanifemi",
             "store_name": "Captain Cook",
             "address": "Mayfair",
             "logo": "https://user-images.githubusercontent.com/17219534/71550921-868a2b00-29db-11ea-9f16-3a7d50ff53fa.jpg",
             "phone_number": "08038393920",
             "status": 2,
             "description": "Get your food from any restaurant you wish",
             "user_id": 2,
            "category_id": 1,
            "region_id": 7,
            "rating": "4.0",
             "open_at": "7",
            "close_at": "12",
            "created_at": null,
            "updated_at": null,
             "idregions": 7,
            "name": "Restaurants",
            "city_id": 1,
             "idcategories": 1,
            "icon": "https://user-images.githubusercontent.com/17219534/71551256-43cc5100-29e3-11ea-9b79-199c4f622134.png"
    },
    {
        "idvendors": 1,
        "manager_name": "Felix Ogungbe",
        "store_name": "Mr Banwil",
        "address": "OAU New Buka",
        "logo": "https://user-images.githubusercontent.com/17219534/71550968-65760a00-29dc-11ea-8869-effd1fc488c4.jpg",
         "phone_number": "08038393920",
         "status": 2,
         "description": "Get your food from any restaurant you wish",
        "user_id": 2,
        "category_id": 1,
        "region_id": 7,
        "rating": "4.0",
         "open_at": "7",
        "close_at": "12",
        "created_at": null,
        "updated_at": null,
         "idregions": 7,
        "name": "Restaurants",
        "city_id": 1,
         "idcategories": 1,
        "icon": "https://user-images.githubusercontent.com/17219534/71551256-43cc5100-29e3-11ea-9b79-199c4f622134.png"
       }]
}
    getSwallow() {
        return [
            {
                "Swallows": [
                    {
                        "idstockdetails": 3,
                        "vendor_id": 1,
                        "description": "Get a meal of egg fried rice, 3 chicken wings, and a 35cl pet coke for just N1,400 only",
                        "name": "Amala",
                        "status": "Available",
                        "image": null,
                        "stockprice": 200,
                        "stock_category_id": 1,
                        "created_at": null,
                        "updated_at": null
                    },
                    {
                        "idstockdetails": 4,
                        "vendor_id": 1,
                        "description": "Get a meal of egg fried rice, 3 chicken wings, and a 35cl pet coke for just N1,400 only",
                        "name": "Eba",
                        "status": "Available",
                        "image": null,
                        "stockprice": 100,
                        "stock_category_id": 1,
                        "created_at": null,
                        "updated_at": null
                    }
                ]
            },
            {
                "Soups": []
            },
            {
                "Main Meals": []
            },
            {
                "Meat": []
            },
            {
                "Meat Snacks": []
            }
        ]
    }
}
