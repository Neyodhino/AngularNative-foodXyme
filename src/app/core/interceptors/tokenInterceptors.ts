import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header (fake value is shown here)
    const authHeader = "HdFDjada4da";
    const modifiedRequest = req.clone({
        setHeaders: {
          token: authHeader
        }
      });

    return next.handle(modifiedRequest);
  }
}

