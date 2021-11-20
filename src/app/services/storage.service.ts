import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class StorageService {
  Id: string = "Id";
  Username: string = "Username";
  get sessionId(): any {
    return sessionStorage[this.Id] ? sessionStorage[this.Id] : undefined;
  }
  get sessionUsername(): any {
    return sessionStorage[this.Username]
      ? sessionStorage[this.Username]
      : undefined;
  }
  set sessionId(value: any) {
    sessionStorage[this.Id] = value;
  }
  set sessionUsername(value: any) {
    sessionStorage[this.Username] = value;
  }

  deleteSession(): void {
    sessionStorage.removeItem(this.Id);
    sessionStorage.removeItem(this.Username);
  }

  get localId(): any {
    return localStorage[this.Id] ? localStorage[this.Id] : undefined;
  }
  get localUsername(): any {
    return localStorage[this.Username]
      ? localStorage[this.Username]
      : undefined;
  }
  set localId(value: any) {
    localStorage[this.Id] = value;
  }
  set localUsername(value: any) {
    localStorage[this.Username] = value;
  }

  deleteLocal(): void {
    localStorage.removeItem(this.Id);
    localStorage.removeItem(this.Username);
  }
}
