import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";

import * as fromCore from "../reducers";
import * as actions from "../actions/core.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  template: `
    <app-logo></app-logo>
    <app-cart></app-cart>
    <app-menu> </app-menu>

    <!--<app-footer></app-footer> -->
    <footer style="margin-top:50px;">
      <app-footer> </app-footer>
    </footer>
  `
})
export class DashboardComponent implements OnInit {
  //cartCount$:Observable<number>;

  constructor(private store: Store<fromCore.State>, private router: Router) {
    //this.cartCount$ = this.store.select(fromCore.getCartCount);
  }

  ngOnInit(): void {
    //this.store.dispatch(new actions.LoadCartContent());
  }
}
