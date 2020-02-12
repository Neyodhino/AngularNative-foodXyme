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
        // return this.http.get(`${BASE_URL}api/category/${id}`);
        return this.http.get(`${BASE_URL}api/vendors`);
    }
    getApiVendor(id: number): Observable<any> {
        return this.http.get(`${BASE_URL}api/vendor/${id}`);
    }
}
