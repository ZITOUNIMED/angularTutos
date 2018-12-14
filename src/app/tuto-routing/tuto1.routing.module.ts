import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TutoRoutingComponent } from "./tuto-routing.component";

const tuto1Routes: Routes = [
  { path: "routing", component: TutoRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(tuto1Routes)],
  exports: [RouterModule]
})
export class Tuto1RoutingModule {}
