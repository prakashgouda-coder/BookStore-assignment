import { CoreEffects } from "./core/effects/core.effects";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { HttpModule } from "@angular/http";
import { CustomRouterStateSerializer } from "./shared/utils/router-utils";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CatalogModule } from "./catalog/catalog.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AvatarModule } from "ngx-avatar";
import { LoginComponent } from "./login/login.component";
import { environment } from "../environments/environment";

import { MomentModule } from "angular2-moment";
import { HttpClientModule } from "@angular/common/http";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// App related imports
import { reducers, metaReducers } from "./core/reducers";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "../../src/app/core/containers/dashboard.component";
import { AuthenticationService } from "./authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CatalogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    HttpModule,

    /**
     * ngrx store root
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,

    EffectsModule.forRoot([CoreEffects]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // Firebase modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AvatarModule,
    MomentModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
