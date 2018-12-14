import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TutoRoutingComponent } from "./tuto-routing/tuto-routing.component";

const appRoutes: Routes = [
  { path: "routing", component: TutoRoutingComponent }
];

@NgModule({
  declarations: [AppComponent, TutoRoutingComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
