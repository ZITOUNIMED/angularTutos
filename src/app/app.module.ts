import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Tuto1Module } from "./tuto-routing/tuto1.module";
import { AppRoutingModule } from "./app.routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, Tuto1Module, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
