import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "../app/core/containers/dashboard.component";
const routes: Routes = [
  { path: "cart", loadChildren: "app/cart/cart.module#CartModule" },
  { path: "", component: LoginComponent },

  {
    path: "home",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
