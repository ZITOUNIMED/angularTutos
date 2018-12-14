import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [{ path: "**", component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
