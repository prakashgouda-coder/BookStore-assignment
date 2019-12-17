import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as fromCore from "../../app/core/reducers";
import * as actions from "../../../src/app/core/actions/core.actions"; //"../../actions/core.actions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {
    //this.cartCount$ = this.store.select(fromCore.getCartCount);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    // this.route.navigate(["/catalog/list"]);
  }
  ngAfterChecked() {
    // this.route.navigate(["/core"]);
  }
}
