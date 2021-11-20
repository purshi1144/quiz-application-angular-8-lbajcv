import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "./services/storage.service";
import { Router } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _store: StorageService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._store.sessionId && this._store.sessionUsername) {
      return true;
    } else {
      this._store.deleteSession();
      this._router.navigate([""]);
      return false;
    }
  }
}
