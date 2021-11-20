import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../services/storage.service";
import * as uuid from "uuid";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  Username: string =  "Dummy"
  form: FormGroup = new FormGroup({
    username: new FormControl("")
  });
  constructor(private _router: Router, private _store: StorageService) {}
  ngOnInit() {
    sessionStorage[this.Username] = "sanoj";
  }
  submit() {
    if (this.form.valid) {
      const guid = uuid.v4();
      this._store.sessionId = guid;
      this._store.sessionUsername = this.form.value.username;
      this._router.navigate(["/quiz"]);
    }
  }
}
